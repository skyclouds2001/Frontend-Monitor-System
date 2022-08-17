const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './src/index.ts'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'js/index.js',
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: 8000,
    hot: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: true,
    },
  },
  plugins: [
    new HtmlPlugin({
      title: 'Monitor System',
      template: './public/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          'ts-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, './src/'),
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  devtool: 'eval-source-map',
};
