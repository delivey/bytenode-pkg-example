const { execSync } = require("child_process")
require('dotenv').config()
const prod = JSON.parse(process.env.prod)

const files = [
    "./main.js",
    "./some-stuff/stuff.js",
    "./some-stuff/more-stuff/other-stuff.js"
]

if (prod) {
    for (let i=0; i<files.length; ++i) {
        // Should use api instead of commands here.
        // Just lazy.
        // You can make a pull request if you like, I'll merge it.
        const file = files[i]
        const command = `bytenode --compile ${file}`
        execSync(command)
    }
    
    execSync("pkg . --output a.exe")
} else {
    console.log("Can't compile project because environment is set to prod.")
    console.log("Please change the prod variable in the .env file to true.")
}