#!/usr/bin/env node

const chalk = require('chalk');
const { name, version } = require('./package');

if (!process.argv[2]) {
  console.log(chalk.green(`${name} ~ ${version}`));
  console.log(chalk.gray('Translate tools in command line'));
  console.log(chalk.cyan('  $ ') + 'trans word');
  console.log(chalk.cyan('  $ ') + 'trans world peace');
  console.log(chalk.cyan('  $ ') + 'trans chinglish');
  return;
} else {
  const trans = require('.');
  trans(process.argv.slice(2).join(' '));
}
