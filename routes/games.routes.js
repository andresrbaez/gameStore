const express = require('express');

// Controllers
const {
  getAllGames,
  createGame,
  updateGame,
  deleteGame,
  createReview,
} = require('../controllers/games.controller');

// Middlewares
const { gameExists } = require('../middlewares/games.middlewares');
const { protectSession } = require('../middlewares/auth.middlewares');

const {
  createUserValidators,
} = require('../middlewares/validators.middlewares');

const gamesRouter = express.Router();

gamesRouter.get('/', getAllGames);

// Protecting below endpoints
gamesRouter.use(protectSession);

gamesRouter.post('/', createGame);

gamesRouter.patch('/:id', gameExists, updateGame);

gamesRouter.delete('/:id', gameExists, deleteGame);

gamesRouter.post('/reviews/:gameId', createReview);

module.exports = { gamesRouter };
