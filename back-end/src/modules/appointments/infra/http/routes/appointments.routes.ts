import { Router } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

// Importando arquivos Agendamento
import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

// Importando Middlewares
import ensureAuthenticaded from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticaded);

// Listagem dos Agendamentos
// appointmentsRouter.get('/', async (request, response) => {
//   const appointmentsRepository = getCustomRepository(AppointmentsRepository);

//   const appointments = await appointmentsRepository.find();

//   return response.json(appointments);
// });

// Criação de Agendamento
appointmentsRouter.post('/', async (request, response) => {
  const { provider_id, date } = request.body;

  const parsedDate = parseISO(date);

  const createAppointment = container.resolve(CreateAppointmentService);

  const appointment = await createAppointment.execute({
    date: parsedDate,
    provider_id,
  });

  return response.json(appointment);
});

export default appointmentsRouter;
