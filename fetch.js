#!/usr/bin/env node
'use strict';

const { validateInput, verifyIpAddress, getGeolocationData } = require('./lib');

module.exports = async function fetch (input) {
  validateInput(input);

  verifyIpAddress(input[0]);

  return await getGeolocationData(input[0]);
}