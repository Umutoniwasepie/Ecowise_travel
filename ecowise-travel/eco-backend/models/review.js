// models/review.js

module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });

  Review.associate = (models) => {
    Review.belongsTo(models.User, { foreignKey: 'userId' });
  };

  return Review;
};
