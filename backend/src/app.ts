import express from 'express';
import cors from 'cors';
import logger from 'morgan';

export const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors());
app.use(logger('dev'));
