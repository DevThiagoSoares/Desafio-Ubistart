import express, { Express } from 'express';

import connectMongoDB from '../database';
import appMiddlewares from './middleware';

export default function appConfig(app: Express): void {

    // Middlewares
    appMiddlewares(app)
    // Conectadndo com banco
    connectMongoDB();

}
