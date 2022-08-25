import { Request, Response, NextFunction } from 'express';
import { User } from '../model/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
dotenv.config();


export const Register = async (req: Request, res: Response) => {
    const { name, email, password, confirmPassword } = req.body;

    const validation = [req.body]


    validation.forEach(function (value: Request) {
        console.log(value)
        if (!value) {
            return res.status(422).json({ mensage: `O ${value} é obrigatorio` });
        }
    });
    
    // verificar senha
    if (password !== confirmPassword) {
        return res.status(422).json({ mensage: 'As senhas não conferem' });
    }

    //verificar Usuario por Email
    const userExists = await User.findOne({ email: email })

    if (userExists) {
        return res.status(422).json({ mensage: 'Utilize outro email' });
    }

    // senha
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    // usario
    const user = new User({
        name,
        email,
        password: passwordHash,
    });

    try {
        await user.save()
        res.status(201).json({ mensage: 'Usuario criado com sucesso!' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ mensage: 'Erro no servidor' });
    }
}


export const Login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const validation = [req.body]


    validation.forEach(function (value) {
        console.log(value)
        if (!value) {
            return res.status(422).json({ mensage: `O ${value} é obrigatorio` });
        }
    });

    //verificar Usuario 
    const user = await User.findOne({ email: email });
    if (!user) {
        return res.status(404).json({ mensage: 'Usuario não encontrado!' });
    }

    // verificar se a senha esta correta
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
        return res.status(422).json({ mensage: 'Senha invalida!' });
    }

    try {

        const secret: any = process.env.SECRET

        const token = jwt.sign(
            {
                id: user._id,
            },
            secret,
        )
        res.status(200).json({ mensage: 'Autenticação realizada com sucesso', token });

    } catch (error) {
        console.log(error)
        res.status(500).json({ mensage: 'Erro no servidor' });
    }
}

export function checkToken(req: Request, res: Response, next: NextFunction) {

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ mensage: 'Acesso negado!' });
    }

    try {

        const secret: any = process.env.SECRET
        jwt.verify(token, secret);

        next();

    } catch (error) {
        console.log(error)
        res.status(400).json({ mensage: 'Erro no servidor' });
    }
}

export const UserId = async (req: Request, res: Response) => {
    const id = req.params.id;

    // 
    const user = await User.findById(id, '-password');

    if (!user) {
        return res.status(404).json({ mensage: 'Usuario não encontrado!' });
    }
    res.status(200).json({ user });
}

