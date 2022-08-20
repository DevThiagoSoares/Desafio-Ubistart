import express from 'express';
import appConfig from './config'

import { router } from './router/index'

export const app = express();

appConfig(app);

export default app;

