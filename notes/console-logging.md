# console logging

## intro

this allows us to add colours into our `console.log` statements

## console.info/debug/warn/error/assert/table/dir/dirxml

See reference https://developer.mozilla.org/en-US/docs/Web/API/Console

- console.log() produces black text
- console.info() blue text with icon
- console.debug() have to view with F12, console, filter, levels, verbose
- console.warn() yellow with icon
- console.error() red with icon
- console.assert(boolean,"this test has failed") - appears if assertion is false

```js
console.log('console.log');
console.log('big object',bigObject)
console.info('console.info');
console.debug('console.debug'); // same as log()
console.warn('console.warn');
console.error('console.error');
console.assert(true); // not output if true
console.assert(false); // assert outputs if fails
console.table(myObject);
console.dir() - view details of object
console.dirxml() - shows interactive tree of element with descendants
```

## colour output

we can log in different colors using ansi color codes https://en.m.wikipedia.org/wiki/ANSI_escape_code#Colors

in the example below we log in ansi color `33` which is yellow

```
console.log('\x1b[33mPrint in another colour \x1b[0m')
```
	
## log using chalk color library
	
we can easily use colours in our console logging by using the `chalk` color library
	
```js
import chalk from 'chalk';
const log = console.log;
chalk.level = 1; // Use colours in the VS Code Debug Window
log(chalk.yellow('Welcome to the app!'));
for (var i = 0; i <= 10; i++){
    log(chalk.white('Attempting to connect to endpoint, attempt ' + i));
}
log(chalk.green('Connection established! Sending statistics'));
log(chalk.red('Not all statistics are available...'));
log(chalk.redBright('Endpoint disconnected before all results were received'));
log(chalk.magenta('All finished'));
```

## colors.js

we can also log with `colors.js` (note - care with this repo as the owner deliberately sabotaged it!)

```js
var colors = require('colors');

colors.enable()

console.log('Error!'.underline.red);
console.log('Warning!'.red);
console.log('This is okay!'.green);
```

