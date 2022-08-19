import { Router } from 'express';
import  { User } from '../model/User';
import bcrypt from 'bcrypt';

export const router = Router();

router.get('/', (req, res) => res.send('API Desafiuo Ubistart'));
router.get('/task', (req, res) => res.send('task'));

// Regiter User
router.post('/auth/register',async (req, res) => {
    const { name, email, password, confirmPassword} = req.body;

    // validações
    if(!name) {
        return res.status(422).json({mensage: 'O nome é obrigatorio'})
    }
    if(!email) {
        return res.status(422).json({mensage: 'O email é obrigatorio'})
    }
    if(!password) {
        return res.status(422).json({mensage: 'A senha é obrigatorio'})
    }
    if(password !== confirmPassword) {
        return res.status(422).json({mensage: 'As senhas não conferem'})
    }

    //verificar Usuario por Email
    const userExists = await User.findOne({ email: email })
    
    if(userExists) {
        return res.status(422).json({ mensage: 'Utilize outro email' })
    }

    // senha
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt)

    // usario
    const user = new User({
        name, 
        email, 
        password: passwordHash,
    })

    try {
        await user.save()
        res.status(201).json({ mensage: 'Usuario criado com sucesso!' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ mensage: 'Erro no servidor' })
    }

})
console.log(User.name)