const Sequelize = require('sequelize');
const { Model } = require('sequelize');

class Comment extends Model {
  static init(sequelize) {
    super.init(
      {
        comment: Sequelize.STRING
      },
      {
        sequelize
      }
    );

    return this;
  }
}

module.exports = Comment;
