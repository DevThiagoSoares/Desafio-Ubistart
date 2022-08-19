import { Router } from 'express';

export const router = Router();

router.get('/', (req, res) => res.send('API Desafiuo Ubistart'));
router.get('/task', (req, res) => res.send('task'));