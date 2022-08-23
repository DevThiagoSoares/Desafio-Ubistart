import {  Router } from 'express';

import dotenv from 'dotenv';
import { checkToken, Login, Register, TaskAll, TaskPost, UserId } from '../controller';
dotenv.config();

export const router = Router();
// Teste de api
router.get('/', (req, res) => res.send('API Desafiuo Ubistart'));
// Regiter User
// validação 
router.post('/auth/register', Register);
// Login User
router.post('/auth/login', Login)
// Perfil User
router.get('/user/:id', checkToken, UserId)
// Tarefa
router.route('/task').post(TaskPost)
// Todas as tarefas
router.get('/task/all', TaskAll)
