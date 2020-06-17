const Comment = require('../models/Comment');

class CommentRepository {
  async save(inputComment) {
    const comment = await Comment.create(inputComment);

    return comment;
  }

  async findAll() {
    const comments = await Comment.findAll();

    return comments;
  }
}

module.exports = CommentRepository;
