import { app } from './app';
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT;

app.listen(port, () => console.log(`App ouvindo na porta ${port}`));