const { filterData } = require('./services/filterService');
const { countChildren } = require('./services/countService');
const { getAllData } = require('./services/dataService');

function main() {
  const args = process.argv.slice(2);
  const filterArg = args.find(arg => arg.startsWith('--filter='));
  const countArg = args.includes('--count');

  if (filterArg) {
    const pattern = filterArg.split('=')[1];
    const filtered = filterData(pattern);
    console.log(JSON.stringify(filtered, null, 2));
  } else if (countArg) {
    const counted = countChildren();
    console.log(JSON.stringify(counted, null, 2));
  } else {
    const full = getAllData().map(c => c.toJSON());
    console.log(JSON.stringify(full, null, 2));
  }
}

if (require.main === module) {
  main();
}
