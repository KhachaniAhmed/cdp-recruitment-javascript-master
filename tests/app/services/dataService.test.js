const { getAllData, hydrateData } = require('../../../app/services/dataService');

// Mock les données brutes
jest.mock('../../../assets/data', () => ({
  data: [
    {
      name: 'France',
      people: [
        { name: 'Alice', animals: [{ name: 'Cat' }] }
      ]
    }
  ]
}));

describe('dataService', () => {
  test('hydrateData should return list of Country instances', () => {
    const countries = hydrateData();
    expect(countries).toHaveLength(1);
    expect(countries[0].name).toBe('France');
    expect(countries[0].people[0].name).toBe('Alice');
  });

  test('getAllData should return same as hydrateData', () => {
    const all = getAllData();
    expect(all.length).toBe(1);
  });
});
