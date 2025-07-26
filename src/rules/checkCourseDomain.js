module.exports = async (user, course) => {
  if (user.domain !== course.domain) {
    throw new Error('User domain does not match course domain.');
  }
};
