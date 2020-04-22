import { Router } from 'express';

// Importando as Rotas
import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

import logRequest from '../middlewares/loadLogs';

const routes = Router();
routes.use(logRequest);
routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
