import { text } from 'express';
import mongoose, { Types } from 'mongoose';
// import Category from './category';
const blogSchema = mongoose.Schema({
    title:{
        type:String,
        unique: true,
        required: true,
    },
    description:{
        type: text,
    },
    category:{
        type:String,
        required:true,
        enum: ['Tech', 'Travel', 'Movie']
    },
    // category:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Category',
    //     required: true
    // }
})


const blog = mongoose.model('Blog', blogSchema)

export default blog;