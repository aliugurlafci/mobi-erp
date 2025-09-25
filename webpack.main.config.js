const { mainRules } = require('./webpack.rules');
module.exports = {
  entry: './src/main.js',
  module: {
    rules: mainRules,
  },
};
