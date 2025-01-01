import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true, // Ensures there are no leading or trailing spaces
    },
    description: {
        type: String, 
        required: true, 
    },
    category: {
        type: String,
        required: true,
        enum: ['Tech', 'Travel', 'Movie', 'Lifestyle', 'Food'], //only provided values is allowed
    },
    // Uncomment and use this if you want to reference a separate Category model:
    // category: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Category',
    //     required: true,
    // },
}, {
    timestamps: true, // Adds `createdAt` and `updatedAt` fields automatically
});

// Create and export the model
const Blog = mongoose.model('Blog', blogSchema);
export default Blog;
