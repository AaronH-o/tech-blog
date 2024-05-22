const User = require('./User');
const BlogPost = require('./BlogPost.js');
const Comment = require('./Comment.js');

// Creates a relationship between User and Project model, with the User having a "has many" relationship with Project model.
User.hasMany(BlogPost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

BlogPost.hasMany(Comment, {
  foreignKey: 'blogpost_id',
  onDelete: 'CASCADE'
});

// Creates a relationship between User and Project model, with a "belongs to" relationship of the Project to the User.
BlogPost.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(BlogPost, {
  foreignKey: 'blogpost_id'
});

module.exports = { User, BlogPost, Comment };
