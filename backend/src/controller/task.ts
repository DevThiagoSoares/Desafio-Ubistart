import { Request, Response } from 'express';
import { Task } from '../model/Task';


export const DeleteTask = async (req: Request, res: Response) => {
    const id = req.params.id

    await Task.findOne({ _id: id })

    try {
        await Task.deleteOne({ _id: id })

        return res.status(200).json({ mensage: 'Tarefa deletada' });
    } catch (error) {
        return res.status(404).json({ mensage: 'Tarefa não encontrada' })
    }

}

export const EditTask = async (req: Request, res: Response) => {
    const id = req.params.id
    const { title, description } = req.body

    await Task.findById(id)

    try {
        await Task.updateOne({ _id: id }, { title, description })
        console.log('Id: ', id, "{Id}: ", { id })
        return res.status(200).json({ mensage: 'Tarefa atualizada com sucesso"' })
    } catch (error) {
        console.log(Error)
        return res.status(401).json({ mensage: 'Error' })
    }
}

export const TaskPost = async (req: Request, res: Response) => {
    const { title, description } = req.body;
    const newTask = new Task({ title, description })
    await newTask.save();
    return res.status(200).json({ mensage: 'Tarefa criada' });

}

export const TaskAll = async (req: Request, res: Response) => {
    try {
        // lendo dados
        const task = await Task.find();
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: error });
    }

}