const { rendererRules } = require('./webpack.rules');

const rules = [
  ...rendererRules,
  {
    test: /\.css$/,
    use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
  },
];

module.exports = {
  module: {
    rules,
  },
};
