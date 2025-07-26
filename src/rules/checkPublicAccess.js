module.exports = async (user, course) => {
  const emailEndsWith = process.env.EMAIL_ENDS_WITH || '@example.com';
  if (!course.is_public && !user.email.endsWith(emailEndsWith)) {
    throw new Error('Only users with @example.com email can enroll in private courses.');
  }
};
