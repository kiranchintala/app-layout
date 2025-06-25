const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/main.jsx',
  mode: 'development',
  target: 'web',
  devServer: {
    port: 3006,
    historyApiFallback: true
  },
  output: {
    publicPath: 'auto'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@mtbs/shared-lib/auth': process.env.MOCK_AUTH === 'true'
        ? path.resolve(__dirname, 'src/auth.mock.js')
        : path.resolve(__dirname, 'src/auth.js'),
    },
  },
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'layout',
      filename: 'remoteEntry.js',
      exposes: {
        './SiteHeader': './src/components/SiteHeader.jsx',
        './LeftNav': './src/components/LeftNav.jsx'
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.2.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.2.0' },
        'react-router-dom': { singleton: true, requiredVersion: '^6.20.0' },
        '@mtbs/shared-lib': { singleton: true }
      }
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new Dotenv()
  ]
};
