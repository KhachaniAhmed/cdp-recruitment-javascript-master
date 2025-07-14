const Person = require('./person');

class Country {
  constructor(name, people = []) {
    this.name = name;
    this.people = people.map(p => new Person(p.name, p.animals));
  }

  filterPeople(pattern) {
    const filteredPeople = this.people
      .map(p => p.filterAnimals(pattern))
      .filter(Boolean);

    if (filteredPeople.length === 0) return null;

    return new Country(this.name, filteredPeople);
  }

  countPeople() {
    return this.people.length;
  }

  withChildrenCount() {
    const countedPeople = this.people.map(p => p.withCount());
    return new Country(`${this.name} [${this.countPeople()}]`, countedPeople);
  }

  toJSON() {
    return {
      name: this.name,
      people: this.people.map(p => p.toJSON()),
    };
  }
}

module.exports = Country;
