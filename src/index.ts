import express, {Request, Response, NextFunction} from 'express';
import usersRoute from './routes/users.route';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(usersRoute);
app.listen(port, () => console.log('Rodando na porta ' + port));