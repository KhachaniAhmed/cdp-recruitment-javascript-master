const { countChildren } = require('../../../app/services/countService');
const { hydrateData } = require('../../../app/services/dataService');
const  Country  = require('../../../app/domain/country');


jest.mock('../../../app/services/dataService', () => ({
  hydrateData: jest.fn()
}));



describe('countChildren', () => {
  test('returns countries with people/animal count', () => {
    const mockCountry = new Country('Italy', [
      { name: 'Alice', animals: [{ name: 'Dog' }, { name: 'Cat' }] },
      { name: 'Bob', animals: [{ name: 'Cow' }] }
    ]);

    hydrateData.mockReturnValue([mockCountry]);

    const result = countChildren();

    expect(result.length).toBe(1);
    expect(result[0].name).toBe('Italy [2]');
    expect(result[0].people[0].name).toBe('Alice [2]');
    expect(result[0].people[1].name).toBe('Bob [1]');
  });
});
