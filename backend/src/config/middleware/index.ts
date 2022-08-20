import express, { Express } from 'express';
import cors from 'cors';
import logger from 'morgan';
import { router } from '../../router/index'

export default function appMiddlewares(app: Express): void {

    // MIDDLEWARES
    app.use(express.json());
    app.use(cors());
    app.use(logger('dev'));

    // integrando endpoint na aplicação
    app.use('/', router);
}