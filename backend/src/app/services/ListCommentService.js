const CommentRepository = require('../repositories/CommentRepository');

class ListCommentService {
  async execute(comment) {
    const commentRepository = new CommentRepository();

    const comments = await commentRepository.findAll();

    return comments;
  }
}

module.exports = ListCommentService;
