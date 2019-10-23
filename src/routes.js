//  Forma antiga
// const { Router } = require('express');

//  Forma nova
// import User from './app/models/User';
import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', UserController.store);

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
