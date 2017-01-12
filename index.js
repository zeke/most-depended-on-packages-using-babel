const babelDevDependents = require('dependent-packages').directDevDependents('babel')

// all-the-package-names array is sorted by number of dependents
const names = require('all-the-package-names')
  .filter(name => babelDevDependents.includes(name))
  .map(name => `1. ${name} [npm](http://npm.im/${name}) [ghub](http://ghub.io/${name})`)

process.stderr.write(`${names.length} packages devDepend on babel`)
process.stdout.write(names.join('\n'))
