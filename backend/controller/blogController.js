import Blog from "../model/blog.js";

export default class BlogController {
    // for fetching all blogs
    async allBlogs(req, res) {
    
    }

    // for fetching a blog by ID
    async blogById(req, res) {
        
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
      
    }
}
