import { Router } from 'express';

// Importando Middlewares
import ensureAuthenticaded from '@modules/users/infra/http/middlewares/ensureAuthenticated';

// Importando a Controller
import AppointmentsController from '@modules/appointments/infra/http/controllers/AppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();

appointmentsRouter.use(ensureAuthenticaded);

// Criação de Agendamento
appointmentsRouter.post('/', appointmentsController.create);

export default appointmentsRouter;
