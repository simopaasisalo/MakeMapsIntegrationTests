var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'release');


module.exports = {
  entry: './dist/main.js',
  output: {
    path: BUILD_DIR,
    filename: 'test.js'
  },
  alias: {
    react: path.resolve('./node_modules/react'),
  },
  module:{
    loaders : [
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.png$/,
        loader: 'url-loader',
        query: { mimetype: 'image/png' }
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'url-loader'
      }
    ]
  },
  // required for xlsx to work with webpack
  node: {
    fs: 'empty'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ],
  externals: [
    {
      './cptable': 'var cptable'
    },
    {
      './jszip': 'jszip'
    }
  ],

};
