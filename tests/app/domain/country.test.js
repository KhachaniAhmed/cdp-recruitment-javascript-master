const  Country  = require('../../../app/domain/country');
const  Person  = require('../../../app/domain/person');
const  Animal  = require('../../../app/domain/animal');

describe('Country', () => {
  const people = [
    new Person('Alice', [new Animal('Dog'), new Animal('Cat')]),
    new Person('Bob', [new Animal('Cow')])
  ];

  test('constructor sets name and people', () => {
    const country = new Country('France', people);
    expect(country.name).toBe('France');
    expect(country.people.length).toBe(2);
  });

  test('filterPeople() filters animals by pattern', () => {
    const country = new Country('Spain', people);
    const filtered = country.filterPeople('dog');
    expect(filtered).not.toBeNull();
    expect(filtered.people.length).toBe(1);
    expect(filtered.people[0].animals[0].name).toBe('Dog');
  });

  test('filterPeople() returns null if no match', () => {
    const country = new Country('Germany', people);
    const filtered = country.filterPeople('zebra');
    expect(filtered).toBeNull();
  });

  test('withCount() appends people and animal count', () => {
    const country = new Country('Italy', people);
    const withCount = country.withChildrenCount();
    expect(withCount.name).toBe('Italy [2]');
    expect(withCount.people[0].name).toBe('Alice [2]');
    expect(withCount.people[1].name).toBe('Bob [1]');
  });

  test('countPeople() returns number of people', () => {
    const country = new Country('Portugal', people);
    expect(country.countPeople()).toBe(2);
  });
});
