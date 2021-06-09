require('dotenv').config()
const prod = JSON.parse(process.env.prod)

var other_stuff;
var requireNR = require;
if (prod) other_stuff = requireNR("./more-stuff/other-stuff.jsc")
else other_stuff = requireNR("./more-stuff/other-stuff.js")


other_stuff.externalFunc();
console.log("IMPORTED | ./some-stuff/stuff.js")