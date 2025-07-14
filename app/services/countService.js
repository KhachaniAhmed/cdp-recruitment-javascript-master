const { hydrateData } = require('./dataService');

function countChildren() {
    return hydrateData().map(c => c.withChildrenCount().toJSON());
}
  
module.exports = { countChildren };
  