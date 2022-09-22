const express = require('express');

// Controllers
const {
  getAllConsoles,
  createConsole,
  updateConsole,
  deleteConsole,
} = require('../controllers/consoles.controller');

// Middlewares
const { consoleExists } = require('../middlewares/consoles.middlewares');
const { protectSession } = require('../middlewares/auth.middlewares');

const {
  createUserValidators,
} = require('../middlewares/validators.middlewares');

const consolesRouter = express.Router();

consolesRouter.get('/', getAllConsoles);

// Protecting below endpoints
consolesRouter.use(protectSession);

consolesRouter.post('/', createConsole);

consolesRouter.patch('/:id', consoleExists, updateConsole);

consolesRouter.delete('/:id', consoleExists, deleteConsole);

module.exports = { consolesRouter };
