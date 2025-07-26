const checkUserLimit = require('../../src/rules/checkUserLimit');
const { Enrollment } = require('../../src/models');

jest.mock('../../src/models', () => require('../../__mocks__/models'));

describe('checkUserLimit', () => {
  it('passes when user is in fewer than 5 courses', async () => {
    Enrollment.count.mockResolvedValue(4);
    await expect(checkUserLimit({ id: 1 }, {})).resolves.not.toThrow();
  });

  it('throws when user is in 5 or more courses', async () => {
    Enrollment.count.mockResolvedValue(5);
    await expect(checkUserLimit({ id: 1 }, {})).rejects.toThrow('User is already enrolled in 5 courses.');
  });
});
