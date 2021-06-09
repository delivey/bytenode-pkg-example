# How to run
1. Create a copy of the `.env.example` file and rename it to `.env`
2. `node compile`

# the `prod` env variable
The `prod` env variable allows for easy testing and compiling.
If you wan't your code to be runnable without compilation to `.jsc` (for testing purposes),
change the variable to `false`. However, you cannot compile the project to `.exe` if you're in a testing environment.
If you want to compile your project to a `.exe`, please ensure the `prod` env variable is `true`.

# Notes
* Bytenode must be imported in `index.js`, even though it seems it's not used. It will not work if it won't be imported.
* `requireNR` must be used in all files where the `require` function would normally be called. This is to ensure `pkg` won't resolve the file and include the source code. With `.jsc` files it's also needed so pkg wouldn't see it as script.
* Node version between the one used by pkg and your main one should match.

