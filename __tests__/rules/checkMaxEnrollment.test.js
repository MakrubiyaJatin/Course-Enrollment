const checkMaxEnrollment = require('../../src/rules/checkMaxEnrollment');
const { Enrollment } = require('../../src/models');

jest.mock('../../src/models', () => require('../../__mocks__/models'));

describe('checkMaxEnrollment', () => {
  it('passes when enrollment is under 50', async () => {
    Enrollment.count.mockResolvedValue(49);
    await expect(checkMaxEnrollment({}, { id: 1 })).resolves.not.toThrow();
  });

  it('throws when enrollment is 50 or more', async () => {
    Enrollment.count.mockResolvedValue(50);
    await expect(checkMaxEnrollment({}, { id: 1 })).rejects.toThrow('Course has reached maximum student limit (50).');
  });
});
