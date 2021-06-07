const { execSync } = require("child_process")

const files = [
    "./main.js",
    "./some-stuff/stuff.js",
    "./some-stuff/more-stuff/other-stuff.js"
]

for (let i=0; i<files.length; ++i) {
    // Should use api instead of commands here.
    // Just lazy.
    // You can make a pull request if you like, I'll merge it.
    const file = files[i]
    const command = `bytenode --compile ${file}`
    execSync(command)
}

execSync("pkg . --output a.exe")