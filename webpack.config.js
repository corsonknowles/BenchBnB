const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/index.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devtool: 'source-maps'
};


// var path = require('path');
// module.exports = {
//   context: __dirname,
//   entry: "./frontend/index.jsx",
//   output: {
//     path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
//     filename: "bundle.js"
//   },
//   module: {
//     loaders: [
//       {
//         test: [/.jsx?$/, /.js?$/],
//         exclude: /(node_modules)/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['es2015', 'react']
//         }
//       }
//     ]
//   },
//   devtool: 'source-map',
//   resolve: {
//     extensions: [".js", ".jsx", "*"]
//   }
// };
