const  Country = require('../domain/country');
const rawData = require('../../assets/data').data;

function hydrateData() {
    return rawData.map(countryData => new Country(countryData.name, countryData.people));
}

function getAllData() {
  return hydrateData();
}

module.exports = { hydrateData, getAllData };

