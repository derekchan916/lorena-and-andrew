const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

const isDeveloping = process.env.NODE_ENV !== 'production';
const app = express();


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


const server = app.listen(8080, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
