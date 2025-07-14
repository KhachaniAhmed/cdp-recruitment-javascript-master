class Animal {
  constructor(name) {
    this.name = name;
  }

  matches(pattern) {
    return this.name.toLowerCase().includes(pattern.toLowerCase());
  }

  toJSON() {
    return { name: this.name };
  }
}

module.exports = Animal;
