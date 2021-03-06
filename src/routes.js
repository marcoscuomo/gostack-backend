//  Forma antiga
// const { Router } = require('express');

//  Forma nova
// import User from './app/models/User';
import { Router } from 'express';
import multer from 'multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationsController from './app/controllers/NotificationsController';
import AvailableController from './app/controllers/AvailableController';
import authMiddleware from './app/middlewares/auth';
import multerConfig from './config/multer';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.put('/users', UserController.update);
routes.post('/files', upload.single('file'), FileController.store);
routes.get('/providers', ProviderController.index);
routes.get('/providers/:providerId/available', AvailableController.index);
routes.post('/appointments', AppointmentController.store);
routes.get('/appointments', AppointmentController.index);
routes.delete('/appointments/:id', AppointmentController.delete);
routes.get('/schedule', ScheduleController.index);
routes.get('/notifications', NotificationsController.index);
routes.put('/notifications/:id', NotificationsController.update);

// Rota para teste
// routes.get('/', async (req, res) => {
//   const user = await User.create({
//     name: 'Marcos Souza',
//     email: 'marcos.souza@itws.com',
//     password_hash: '12334324',
//   });

//   return res.json(user);
// });

// Forma antiga
// module.exports = routes;

// Forma nova
export default routes;
