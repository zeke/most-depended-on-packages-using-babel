const babelDevDependents = require('dependent-packages').directDevDependents('babel')
const names = require('all-the-package-names')
  .filter(name => babelDevDependents.includes(name))

process.stderr.write(`${names.length} packages devDepend on babel`)
process.stdout.write(JSON.stringify(names, null, 2))
