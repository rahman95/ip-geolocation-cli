#!/usr/bin/env node
'use strict';

const chalk = require('chalk');
const axios = require('axios');
const validateIP = require('validate-ip-node');

const apiUrl = "https://api.ipgeolocationapi.com/geolocate";

const _ = {
  validateInput: (input) =>  {
    if (input.length === 0) {
      console.error(chalk.red('Error: No IP address passed'));
      return;
    }

    if (input.length > 1) {
      console.error(chalk.red('Error: More than IP address passed'));
      return;
    }
  },

  verifyIpAddress: (ipAddress) => {
    if(! validateIP(ipAddress)) {
      console.error(chalk.red('Error: Invalid IP address passed'));
      return;
    }
  },

  getGeolocationData: async (ipAddress) => {
    const res = await axios.get(`${apiUrl}/${ipAddress}`)

    return await res.json();
  }
}

module.exports = _;
