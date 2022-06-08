const express = require ('express');
const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken');
const authConfig = require ('../config/auth')

const User = require ('../models/User');

const router = express.Router();

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400, //um dia
    });
}

router.post('/register', async (req, res) => {
    const {email} = req.body;

    try {
        //msg cadastro de email iguais
        if(await User.findOne({email}))
            return res.status(400).send({error: 'User already exists'});

        const user = await User.create(req.body);

        //remover info de senha quando da erro
        user.password = undefined;

        return res.send({
            user,
            token: generateToken({ id: user.id}),
        });
    } catch (err) {
        return res.status(400).send({error: 'Registration failed'});
    }
});
//validações
router.post('/authenticate', async (req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({email}).select('+password');

    //verificação de usuário
    if (!user)
        return res.status(400).send({error: 'User not found'});

    //verificação de senha
    if (!await bcrypt.compare(password, user.password))
        return res.status(400).send({error: 'Invalid password'});

    user.password = undefined;

    //gerar token
    res.send ({
        user,
        token: generateToken({id: user.id}),
    });

    res.send({user, token});
});

module.exports = app => app.use('/auth', router);