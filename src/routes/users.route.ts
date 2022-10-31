import { Router, Request, Response, NextFunction } from 'express';
import { StatusCodes as status } from 'http-status-codes';

const usersRoute = Router();

usersRoute.get('/users', (req : Request, res : Response, next : NextFunction) => {
    res.status(status.OK).send('Puxa tds os usuários!');
});

usersRoute.get('/users/:uuid', (req : Request<{ uuid: string }>, res : Response, next : NextFunction) => {
    res.status(status.OK).send('Puxa um usuário específico!');
});

usersRoute.post('/users', (req : Request, res : Response, next : NextFunction) => {
    res.status(status.OK).send('Adiciona um novo usuário!');
});

usersRoute.put('/users/:uuid', (req : Request<{ uuid: string }>, res : Response, next : NextFunction) => {
    res.status(status.OK).send('Atualiza os dados de um usuário');
});

usersRoute.delete('/users/:uuid', (req : Request<{ uuid: string }>, res : Response, next : NextFunction) => {
    res.status(status.OK).send('Deleta um usuário!');
});

export default usersRoute