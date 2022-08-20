import { Router } from 'express';

export const router = Router();

router.get('/',async (req, res) => {
    const task = req.body;

    const ToDo = {
        task
    }

    try {
        res.status(201).json({ message: 'Tarefa inserida com sucesso!' });    
    } catch (error) {
        
    }
})