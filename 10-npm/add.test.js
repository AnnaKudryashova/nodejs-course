const addTwoNumbers = require('./add');

test('should add 10 to 100 and return 110', () => {
    expect(addTwoNumbers(10, 100)).toBe(110);
});
