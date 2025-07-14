const  Animal  = require('../../../app/domain/animal');

describe('Animal', () => {
  test('matches() should return true if pattern is in name', () => {
    const animal = new Animal('Lion');
    expect(animal.matches('io')).toBe(true);
  });

  test('matches() should be case insensitive', () => {
    const animal = new Animal('Elephant');
    expect(animal.matches('PHAN')).toBe(true);
  });

  test('matches() should return false if pattern is not in name', () => {
    const animal = new Animal('Tiger');
    expect(animal.matches('zebra')).toBe(false);
  });
});
