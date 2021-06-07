# Node 
v14.17.0-win-x64
14.17.0

# Bytenode compilation commands
`bytenode --compile ./*.js`
`bytenode --compile ./**/*.js`

# Compilation
`pkg .`

# Notes
* Bytenode must be imported in `index.js`, even though it seems it's not used. It will not work if it won't be imported.
* `requireJSC` must be used in `index.js` instead of `require`, it does not work with just require.

