const { Router } = require('express');

const CommentController = require('./app/controllers/CommentController');

const routes = new Router();

routes.post('/comments', CommentController.store);
routes.get('/comments', CommentController.index);

module.exports = routes;
