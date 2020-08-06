import express, { response } from 'express'
import ClassesController from './controllers/ClassesController'
import ConnectionsController from './controllers/ConnectionsController'

const routes = express.Router()

const classesControllers = new ClassesController()
const connectionsController = new ConnectionsController()

routes.post('/classes', classesControllers.create)
routes.get('/classes', classesControllers.index)
routes.post('/connections', connectionsController.create)
routes.get('/connections', connectionsController.index)

export default routes

/* 
    GET: Buscar ou listar informações
    POST: Criar nova informação
    PUT: Atualizar informações existentes
    DELETE: Deletar informações existentes

    Route Params: Identificar recursos para atualizar ou deletar
    Query Params: Paginação, filtragem, ordenação, etc
*/
