import { Router } from 'express';

import SessionsController from '@modules/users/infra/http/controllers/SessionsController';

const sessionsRouter = Router();
const sessionsController = new SessionsController();

// Criação de Agendamento
sessionsRouter.post('/', sessionsController.create);

export default sessionsRouter;
