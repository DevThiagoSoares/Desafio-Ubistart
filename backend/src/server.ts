import { app } from './app';

// Porta criada
const port = process.env.PORT || 3000;

// startando Porta
const server = app.listen(port, () => console.log(`App ouvindo na porta ${port}`));

// Interrupção do processo
process.on('SIGINT', () => {
    server.close();
    console.log('App Interrompido');
});