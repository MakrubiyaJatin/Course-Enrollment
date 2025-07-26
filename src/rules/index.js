const checkCourseDomain = require('./checkCourseDomain');
const checkMaxEnrollment = require('./checkMaxEnrollment');
const checkUserLimit = require('./checkUserLimit');
const checkPublicAccess = require('./checkPublicAccess');

module.exports = async (user, course) => {
  await checkCourseDomain(user, course);
  await checkMaxEnrollment(user, course);
  await checkUserLimit(user, course);
  await checkPublicAccess(user, course);
};
