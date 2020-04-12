const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');

// load env vars to webpack
require('dotenv').config();

const clientDir = `${__dirname}/src`;
const distDir = `${__dirname}/dist`;

module.exports = function(env, argv) {
  let plugins = [
    new Dotenv({
      path: './.env',
      silent: false,
      expand: true,
    }),
    new HTMLWebpackPlugin({
      title: process.env.APP_TITLE,
      filename: 'index.html',
      template: `${clientDir}/index.html`,
      inject: false,
    }),
  ];

  if(argv.mode === 'production') {
    plugins.unshift(new CleanWebpackPlugin([distDir]));
  }
  
  return {
    entry: ['@babel/polyfill', `${clientDir}/index.js`],
    output: {
      filename: 'bundle.js',
      path: distDir,
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_module/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          exclude: /assets\/fonts/,
          use: [
            'style-loader', 
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]__[local]',
                minimize: { safe: true },
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: path.resolve(__dirname, './postcss.config.js'),
                },
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/, 
          loader: 'url-loader?limit=8192'
        }
      ],
    },
    plugins: plugins,
    devServer: {
      historyApiFallback: true,
      port: process.env.CLIENT_PORT,
    },
  }
};
