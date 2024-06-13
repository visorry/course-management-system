module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    teacherId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Course.associate = (models) => {
    Course.belongsToMany(models.User, { through: models.Progress, foreignKey: 'courseId' });
  };

  return Course;
};
