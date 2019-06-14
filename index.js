#!/usr/bin/env node
'use strict';

const meow = require('meow');
const fetch  = require('./fetch');


const cli = meow(`
	Usage
	  $ ip-geolocation <input>

	Examples
	  $ ip-geolocation 91.213.103.0
`);

const data = fetch(cli.input);

console.log(data);
