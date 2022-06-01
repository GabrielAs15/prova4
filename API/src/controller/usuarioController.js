import { Router } from "express";
import { login } from '../repository/usuariorepository.js'
const server = Router();

server.post('/usuario/login', async (req, resp) => {
    try{
        const { email, senha} = req.body;
       const linhas = await login(email, senha);
       resp.send(linhas)
    }

    catch(err) {
        resp.status(400).send({
            erro: 'Ocorreu um erro'
        })
    }
    
})

export default server;