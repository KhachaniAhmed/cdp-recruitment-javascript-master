const { filterData } = require('../../../app/services/filterService');
const  Country  = require('../../../app/domain/country');
const { hydrateData } = require('../../../app/services/dataService');


// Mock de dataService
jest.mock('../../../app/services/dataService', () => ({
  hydrateData: jest.fn()
}));

describe('filterData', () => {
  beforeEach(() => {
    const mockCountry = new Country('France', [
      { name: 'Alice', animals: [{ name: 'Dog' }, { name: 'Cat' }] },
      { name: 'Bob', animals: [{ name: 'Cow' }] }
    ]);

    hydrateData.mockReturnValue([mockCountry]);
  });

  test('returns filtered countries with matching animals', () => {
    const result = filterData('at');
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('France');
    expect(result[0].people[0].animals[0].name).toBe('Cat');
  });

  test('returns empty array when no match', () => {
    const result = filterData('zebra');
    expect(result).toEqual([]);
  });

  test('returns full data when no pattern is given', () => {
    const result = filterData(null);
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('France');
  });
});
