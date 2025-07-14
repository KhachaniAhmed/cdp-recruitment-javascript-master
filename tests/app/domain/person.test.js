const  Person  = require('../../../app/domain/person');
const  Animal  = require('../../../app/domain/animal');

describe('Person', () => {
  const animals = [new Animal('Lion'), new Animal('Tiger'), new Animal('Elephant')];

  test('constructor sets name and animals correctly', () => {
    const person = new Person('John', animals);
    expect(person.name).toBe('John');
    expect(person.animals.length).toBe(3);
  });

  test('filterAnimals() returns new person with filtered animals', () => {
    const person = new Person('Alice', animals);
    const filtered = person.filterAnimals('li');

    expect(filtered).not.toBeNull();
    expect(filtered.animals.length).toBe(1);
    expect(filtered.animals[0].name).toBe('Lion');
  });

  test('filterAnimals() returns null if no match', () => {
    const person = new Person('Bob', animals);
    const filtered = person.filterAnimals('zzz');
    expect(filtered).toBeNull();
  });

  test('withCount() appends animal count to name', () => {
    const person = new Person('Eve', animals);
    const counted = person.withCount();
    expect(counted.name).toBe('Eve [3]');
  });

  test('countAnimals() returns number of animals', () => {
    const person = new Person('Max', animals);
    expect(person.countAnimals()).toBe(3);
  });
});
