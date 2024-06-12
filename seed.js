const { sequelize } = require('./models');
const { User, Course, Lesson } = require('./models');

const seedDatabase = async () => {
  try {
    // Synchronize models with the database
    await sequelize.sync({ force: true });

    // Seed users
    await User.bulkCreate([
      { username: 'teacher1', email: 'teacher1@example.com', password: 'password1', role: 'teacher' },
      { username: 'teacher2', email: 'teacher2@example.com', password: 'password2', role: 'teacher' },
      { username: 'student1', email: 'student1@example.com', password: 'password3', role: 'student' },
      { username: 'student2', email: 'student2@example.com', password: 'password4', role: 'student' },
    ]);

    // Seed courses
    await Course.bulkCreate([
      { name: 'Mathematics', description: 'Basic mathematics course', teacherId: 1 },
      { name: 'English', description: 'Basic English course', teacherId: 2 },
    ]);

    // Seed lessons
    await Lesson.bulkCreate([
      { title: 'Introduction to Algebra', content: 'This lesson covers basic algebra concepts.', courseId: 1 },
      { title: 'Grammar Basics', content: 'This lesson covers basic grammar rules.', courseId: 2 },
    ]);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close the database connection
    await sequelize.close();
  }
};

seedDatabase();
