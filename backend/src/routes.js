const { Router } = require('express');

const CommentController = require('./app/controllers/CommentController');

const IBM = require('./app/providers/TextToSpeechProvider');

const routes = new Router();

routes.post('/comments', CommentController.store);
routes.get('/comments', CommentController.index);
// rota pra pegar por id

routes.post('/speech', async (req, res) => {
  const comment = req.body;

  const filePath = await IBM.speech(comment);

  return res.json({ path: filePath });
});

module.exports = routes;
