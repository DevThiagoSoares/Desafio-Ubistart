import { app } from './app';
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// Porta criada
const port = process.env.PORT;

const user = process.env.USER;
const password = process.env.PWD;


// conectar com mongoose
mongoose.connect(
    `mongodb+srv://${user}:${password}@todo.h7qjfhl.mongodb.net/?retryWrites=true&w=majority`
    // `mongodb+srv://todo-ubistart:f4NELHZBcJpyt128@todo.h7qjfhl.mongodb.net/?retryWrites=true&w=majority`
)
    .then(() => {
        console.log('MongoDB conectaado');
        // startando Porta
        const server = app.listen(port, () => console.log(`App ouvindo na porta ${port}`));

        // Interrupção do processo
        process.on('SIGINT', () => {
            server.close();
            console.log('App Interrompido');
        });
    }).catch((err: Error) => console.log('Caiu no catch index', err));