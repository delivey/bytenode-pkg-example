function addition() {
    const result = 2 + 2
    console.log(`./main.js | Result is ${result}`)
}

addition()
console.log("IMPORTED | ./main.js")

require('./some-stuff/stuff.jsc')
require('./some-stuff/more-stuff/other-stuff.jsc')