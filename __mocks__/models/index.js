// __mocks__/models/index.js

const Enrollment = {
  count: jest.fn()
};

const User = {
  findByPk: jest.fn(),
  create: jest.fn()
};

const Course = {
  findByPk: jest.fn(),
  create: jest.fn()
};

module.exports = {
  Enrollment,
  User,
  Course
};
