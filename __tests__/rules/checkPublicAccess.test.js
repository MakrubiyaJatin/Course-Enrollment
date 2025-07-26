const checkPublicAccess = require('../../src/rules/checkPublicAccess');

describe('checkPublicAccess', () => {
  it('passes when course is public', async () => {
    await expect(checkPublicAccess({ email: 'test@other.com' }, { is_public: true }))
      .resolves.not.toThrow();
  });

  it('passes when user has @example.com for private course', async () => {
    await expect(checkPublicAccess({ email: 'bob@example.com' }, { is_public: false }))
      .resolves.not.toThrow();
  });

  it('throws when course is private and email is not @example.com', async () => {
    await expect(checkPublicAccess({ email: 'alice@other.com' }, { is_public: false }))
      .rejects.toThrow('Only users with @example.com email can enroll in private courses.');
  });
});
