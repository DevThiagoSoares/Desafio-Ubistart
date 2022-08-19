import { app } from '../app';
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const user = process.env.USER;
const password = process.env.PASSWORD;


export default function connectMongoDB(): void{
    mongoose.connect(
    `mongodb+srv://${user}:${password}@todo.h7qjfhl.mongodb.net/?retryWrites=true&w=majority`
    // `mongodb+srv://todo-ubistart:f4NELHZBcJpyt128@todo.h7qjfhl.mongodb.net/?retryWrites=true&w=majority`
)
    .then(() => {
        console.log('MongoDB conectaado');
        // startando Porta
        
    }).catch((err: Error) => console.log('Caiu no catch index', err));
} 