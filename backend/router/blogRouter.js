import express from 'express';
import BlogController from '../controller/blogController.js';

const blogRouter = express.Router();
const blogController = new BlogController();

//router for post
blogRouter.post('/postBlog', blogController.postBlog)

//for all blog
blogRouter.get('/allBlog', blogController.allBlogs)


//blog by id
blogRouter.get('/blog/:id', blogController.blogById)

//update blog
blogRouter.put('/updateBlog/:id', blogController.updateBlog)

export default blogRouter;