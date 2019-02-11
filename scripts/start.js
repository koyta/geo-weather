// Transpile all code following this line with babel and use 'env' (aka ES6) preset.
require("@babel/register")({
  plugins: ["@babel/plugin-proposal-class-properties"],
  presets: ["@babel/preset-typescript", "@babel/preset-env"],
  extensions: [".js", ".jsx", ".ts", ".tsx"],
});

// Import the rest of our application.
module.exports = require("../app.ts");
