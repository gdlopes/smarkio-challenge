const CreateCommentService = require('../services/CreateCommentService');
const ListCommentService = require('../services/ListCommentService');

class CommentController {
  async store(request, response) {
    const inputComment = request.body;

    const createComment = new CreateCommentService();

    const comment = await createComment.execute(inputComment);

    return response.json(comment);
  }

  async index(request, response) {
    const listComments = new ListCommentService();

    const comments = await listComments.execute();

    return response.json(comments);
  }
}

module.exports = new CommentController();
