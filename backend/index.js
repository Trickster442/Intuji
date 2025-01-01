import express from 'express';
import 'dotenv/config'
import cors from 'cors'
import mongoose from 'mongoose';
import blogRouter from './router/blogRouter.js';

const server = express();

//middlewares
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended:true}))

//routers
server.use('/blogs', blogRouter);


// Basic route for home page
server.get('/', (req, res) => {
    res.status(200).send("This is the home page!!!");
});

//connection to database
const create_connection = async ()=>{
    await mongoose.connect(process.env.URL, )
    .then (()=>{
        console.log("Connect to the database successfully");
    })
    .catch((err)=>{
        console.log('MongoDB connection error:', err)
    })
}
create_connection();

// Start the server
server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
