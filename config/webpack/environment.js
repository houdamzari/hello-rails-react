const { environment } = require('@rails/webpacker');
const webpack = require('webpack');

// Add this line if it doesn't exist
environment.plugins.prepend('Provide', new webpack.ProvidePlugin({
  React: 'react',
}));

module.exports = environment;
