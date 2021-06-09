const bytenode = require('bytenode');
require('dotenv').config()
const prod = JSON.parse(process.env.prod)
var requireNR = require; // Little hack

if (prod) {
    console.log("RUNNING PROD")
    requireNR('./main.jsc'); // We do this in order to trick pkg so it won't try to resolve the file
} 
else {
    console.log("RUNNING DEVELOPMENT")
    requireNR("./main.js") // We do this so pkg own't include the actual script by resolving the file
}
