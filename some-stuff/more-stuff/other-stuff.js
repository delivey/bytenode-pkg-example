function externalFunc() {
    console.log(`IMPORTED | externalFunc | ./some-stuff/more-stuff/other-stuff.js | FROM | ./some-stuff/stuff.js`)
}

console.log("IMPORTED | ./some-stuff/more-stuff/other-stuff.js")

module.exports = { externalFunc }