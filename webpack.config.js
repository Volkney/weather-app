const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        data: './src/data.js',
      },
      devtool: 'inline-source-map',
      devServer: {
        static: './dist',
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: 'Development',
          template: './src/index.html', // Path to your source HTML file
          filename: 'index.html', // Output HTML file in the dist folder
        }),
        new CopyWebpackPlugin({
          patterns: [
            { from: './src/images', to: 'images' },
          ],
        }),
      ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },

      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: 'icons/[name].[hash].[ext]',
              outputPath: 'icons/',
            },
          },
        ],
      }, 
      {
        test: /\.webp$/,
        use: [
          {
            loader: 'url-loader',
          options: {
            limit: false, // no limit
            name: 'images/[name].[ext]', 
            outputPath: 'icons/',
            },
          },
        ],
      },  
    ],
  },
};