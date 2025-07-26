const checkCourseDomain = require('../../src/rules/checkCourseDomain');

describe('checkCourseDomain', () => {
  it('passes when domains match', async () => {
    const user = { domain: 'math' };
    const course = { domain: 'math' };
    await expect(checkCourseDomain(user, course)).resolves.not.toThrow();
  });

  it('throws when domains do not match', async () => {
    const user = { domain: 'science' };
    const course = { domain: 'math' };
    await expect(checkCourseDomain(user, course)).rejects.toThrow('User domain does not match course domain.');
  });
});
