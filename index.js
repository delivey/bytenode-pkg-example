const bytenode = require('bytenode');

let requireJSC = require;
requireJSC('./main.jsc'); // We do this in order to trick pkg so it won't try to resolve the file