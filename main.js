require('dotenv').config()
const prod = JSON.parse(process.env.prod)
log = console.log
var requireNR = require; // Little hack

function addition() {
    const result = 2 + 2
    console.log(`./main.js | Result is ${result}`)
}

addition()
console.log("IMPORTED | ./main.js")

if (prod) {
    log("PROD | ./main.js")
    requireNR('./some-stuff/stuff.jsc')
    requireNR('./some-stuff/more-stuff/other-stuff.jsc')
} else {
    log("DEV | ./main.js")
    requireNR('./some-stuff/stuff.js')
    requireNR('./some-stuff/more-stuff/other-stuff.js')
}