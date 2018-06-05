var webpack = require("webpack");
var folder = __dirname;     
module.exports = {
    mode: 'development',
    entry: ['./app/index.js'],
    output: {
        path: __dirname+'/build',
        filename: 'bundle.js',
          },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            }
          }
        ]
      },
    devServer: {
        port: 3000,
        contentBase: './build',
        inline: true
    }
}