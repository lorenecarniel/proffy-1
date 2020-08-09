import express, { response } from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import UsersController from './controllers/UsersController';

const routes = express.Router();

const usersController = new UsersController();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();

// users
routes.post('/users', usersController.create);
routes.get('/users', usersController.isCreated);
routes.put('/users/:id', usersController.updateUser);
// classes
routes.post('/classes/:id', classesControllers.create);
routes.get('/classes', classesControllers.index);
// connections
routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

export default routes;

/* 
    GET: Buscar ou listar informações
    POST: Criar nova informação
    PUT: Atualizar informações existentes
    DELETE: Deletar informações existentes

    Route Params: Identificar recursos para atualizar ou deletar
    Query Params: Paginação, filtragem, ordenação, etc
*/
