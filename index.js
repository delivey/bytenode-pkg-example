'use strict';

const fs = require('fs');
const bytenode = require('bytenode');

if (!fs.existsSync('./main.jsc')) {
  bytenode.compileFile('./main.js', './main.jsc');
}

let requireJSC = require;

requireJSC('./main.jsc'); // we do this in order to trick pkg so it won't try to resolve the file