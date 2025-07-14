const { hydrateData } = require('./dataService');

function filterData(pattern) {
  if (!pattern) return hydrateData().map(c => c.toJSON());

  const filtered = hydrateData()
    .map(c => c.filterPeople(pattern))
    .filter(Boolean);

  return filtered.map(c => c.toJSON());
}

module.exports = { filterData };
