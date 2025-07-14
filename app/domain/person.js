const Animal = require('./animal');

class Person {
  constructor(name, animals = []) {
    this.name = name;
    this.animals = animals.map(a => new Animal(a.name));
  }

  filterAnimals(pattern) {
    const filteredAnimals = this.animals.filter(a => a.matches(pattern));
    if (filteredAnimals.length === 0) return null;
    return new Person(this.name, filteredAnimals);
  }

  countAnimals() {
    return this.animals.length;
  }

  withCount() {
    return new Person(`${this.name} [${this.countAnimals()}]`, this.animals);
  }

  toJSON() {
    return {
      name: this.name,
      animals: this.animals.map(a => a.toJSON()),
    };
  }
}

module.exports = Person;
