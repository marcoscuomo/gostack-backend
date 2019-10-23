//  Forma nova
import express from 'express';
import routes from './routes';
import './database'; // pega o index automaticamente

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

// Forma antiga
// module.exports = new App().server;

// Forma nova
export default new App().server;
