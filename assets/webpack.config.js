const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require("webpack");

module.exports = (env, options) => ({
  optimization: {
    minimizer: [
      new UglifyJsPlugin({ cache: true, parallel: true, sourceMap: false }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  entry: {
      app: ['./js/app.js'].concat(glob.sync('./vendor/**/*.js')),
      home: ['./js/home.js'],
      band: ['./js/band.js'],
      shows: ['./js/shows.js'],
      media: ['./js/media.js'],
      calendar: ['./js/calendar.js'],
      contact: ['./js/contact.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../priv/static/js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: 'jQuery'
        },{
          loader: 'expose-loader',
          options: '$'
        }]
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: '../fonts/'
          }
        }]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192 // in bytes
          }
        }]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '../css/[name].css' }),
    new CopyWebpackPlugin([{ from: 'static/', to: '../' }]),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        Popper: ["popper.js", "default"],
        // Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
        // Button: "exports-loader?Button!bootstrap/js/dist/button",
        // Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
        // Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
        // Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
        // Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
        // Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
        // Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
        // Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
        // Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
        Util: "exports-loader?Util!bootstrap/js/dist/util"
    })
  ]
});
