import Blog from "../model/blog.js";

export default class BlogController {
    // for fetching all blogs
    async allBlogs(req, res) {
        try{
            const blogs = await Blog.find().select("-_id"); //passing to front without id
            if (blogs.length > 0){
                res.json({success:true, blogs})
            }
            else{
                res.json({success:false, message:"No blog found"})
            }
        }catch(err){
            console.log(err)
            res.status(500).json({ success: false, message: "Server error", error: err.message });  
        }
    }

    // for fetching a blog by ID
    async blogById(req, res) {
        try {
            const id = req.params.id;  // get the id from the route parameter
            
            if (id) {
                const blogById = await Blog.findById(id).select("-_id");  
                if (blogById) {
                    return res.json({ success: true, blog: blogById });  
                }
    
                return res.status(404).json({ success: false, message: "No blog found with that id" });  
            } else {
                return res.status(400).json({ success: false, message: "ID is required" });  
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json({ success: false, message: "Server error", error: err.message });  // Handle server error
        }
    }
    

    // for creating a new blog
    async postBlog(req, res) {
        try{
        const { title, description, category } = await req.body;
        if (title || description || category){
            const newBlog = new Blog({
                title, 
                description,
                category
            })

            await newBlog.save();
            return res.json({success: true, message:"New blog created successfully"})
        }
        else{
            
            return res.json({success: true, message:"Error during creating new blog."})
            
        }
    }catch(err){
        if (err.name === "ValidationError") {
            // handle validation errors
            return res.status(400).json({ error: err.message });
        }

        // other errors
        console.error("Error saving blog:", err);
        return res.status(500).json({ error: "Internal server error." });
    }
    }
      
    // for updating a blog
    async updateBlog(req, res) {
        try {
            const id = req.params.id;
            const { title, description, category } = req.body;
    
            if (!id) return res.status(400).json({ success: false, message: "ID required" });
    
            const blog = await Blog.findById(id);
            if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });
    
            // Create update object and only include fields that have values
            const updateData = {};
            if (title) updateData.title = title;
            if (description) updateData.description = description;
            if (category) updateData.category = category;
    
            if (Object.keys(updateData).length === 0) {
                return res.status(400).json({ success: false, message: "No fields to update" });
            }
    
            // Perform the update
            const result = await Blog.updateOne({ _id: id }, { $set: updateData });
            if (result){
                return res.json({ success: true, message: "Changes made" });
            }
            
            return res.json({ success: false, message: "No Changes made" });
        } catch (err) {
            console.error(err);  // Log error for debugging
            return res.status(500).json({ success: false, message: "Server error", error: err.message });
        }
    }
    
    
}
