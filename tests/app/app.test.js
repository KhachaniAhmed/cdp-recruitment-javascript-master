const { execSync } = require('child_process');
const path = require('path');

describe('App CLI', () => {
  const appPath = path.join(__dirname, '../../app/app.js');

  test('should filter data when --filter is provided', () => {
    const result = execSync(`node ${appPath} --filter=li`).toString();
    const json = JSON.parse(result);
    
    expect(Array.isArray(json)).toBe(true);
    // Vérifie que les animaux contiennent le pattern "li"
    json.forEach(country => {
      country.people.forEach(person => {
        person.animals.forEach(animal => {
          expect(animal.name.toLowerCase()).toContain('li');
        });
      });
    });
  });

  test('should count children when --count is provided', () => {
    const result = execSync(`node ${appPath} --count`).toString();
    const json = JSON.parse(result);

    expect(Array.isArray(json)).toBe(true);
    // Vérifie que les noms des pays et des personnes contiennent un compteur
    json.forEach(country => {
      expect(country.name).toMatch(/\[\d+\]/);
      country.people.forEach(person => {
        expect(person.name).toMatch(/\[\d+\]/);
      });
    });
  });

  test('should return full data when no args are provided', () => {
    const result = execSync(`node ${appPath}`).toString();
    const json = JSON.parse(result);

    expect(Array.isArray(json)).toBe(true);
    expect(json.length).toBeGreaterThan(0);
    expect(json[0]).toHaveProperty('name');
    expect(json[0]).toHaveProperty('people');
  });
});
