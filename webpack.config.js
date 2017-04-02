const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: path.resolve(__dirname, "app/index.jsx"),
  output: {
    path: path.resolve(__dirname),
    filename: "react-bundle.js"
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      }
    })
  ],
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            presets: ['react', 'es2015']
        }
      }, {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devtool: 'source-map',
  watch: false,
};
