const CommentRepository = require('../repositories/CommentRepository');

class CreateCommentService {
  async execute(comment) {
    const commentRepository = new CommentRepository();

    const createdComment = await commentRepository.save(comment);

    return createdComment;
  }
}

module.exports = CreateCommentService;
