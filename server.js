const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

const isDeveloping = process.env.NODE_ENV !== 'production';
const app = express();
const http = require('http');
const path = require('path');
const server = http.createServer(app);

if (isDeveloping) {
  const compiler = webpack(webpackConfig);

  app.use(express.static(__dirname));

  app.use(webpackDevMiddleware(compiler, {
    hot: false,
    filename: 'react-bundle.js',
    publicPath: '/',
    stats: {
      colors: true,
    },
    historyApiFallback: true,
  }));
} else {
  app.use(express.static(__dirname));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
}

server.listen(process.env.PORT || 3000);
server.on('listening', function() {
  console.log('Express server started on port %s at %s', server.address().port, server.address().address); // eslint-disable-line no-console
});
