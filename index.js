#!/usr/bin/env node
'use strict';

const meow = require('meow');
const chalk = require('chalk');

const cli = meow(`
	Usage
	  $ ip-geolocation <input>

	Examples
	  $ ip-geolocation 91.213.103.0
`);

if (cli.input.length === 0) {
  console.error(chalk.red('Error: No IP address passed'));
  return;
}

if (cli.input.length > 1) {
  console.error(chalk.red('Error: More than IP address passed'));
  return;
}

const ipAddress = cli.input;

console.log(ipAddress);