#!/usr/bin/env node

require = require('esm')(module /*, options*/);
require('../src/index').goTime(process.argv);

