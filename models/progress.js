module.exports = (sequelize, DataTypes) => {
  const Progress = sequelize.define('Progress', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    completedLessons: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return Progress;
};
