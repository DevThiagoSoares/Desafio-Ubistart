import express from 'express';
import cors from 'cors';
import logger from 'morgan';

import { router } from './router/index'

export const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors());
app.use(logger('dev'));

// integrando endpoint na aplicação
app.use('/', router);