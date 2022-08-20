import { app } from '../app';
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;


export default function connectMongoDB(): void{
    mongoose.connect(
        `mongodb+srv://${user}:${password}@cluster0.bma9qoo.mongodb.net/?retryWrites=true&w=majority`
        // 'mongodb+srv://test-ubistart:UmSmBmdbj720PCGF@cluster0.bma9qoo.mongodb.net/?retryWrites=true&w=majority'
)
    .then(() => {
        console.log('MongoDB conectaado');
        // startando Porta
        
    }).catch((err: Error) => console.log('Caiu no catch index', err));
} 