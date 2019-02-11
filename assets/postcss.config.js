// module.exports = {
//   parser: 'sugarss',
//   plugins: {
//     'postcss-import': {},
//     'postcss-preset-env': {},
//     'autoprefixer': {},
//     'cssnano': {}
//   }
// }

module.exports = (ctx) => ({
  parser: ctx.parser ? 'sugarss' : false,
  map: ctx.env === 'development' ? ctx.map : false,
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {},
    'autoprefixer': {},
    'cssnano': ctx.env === 'development' ? false : {}
  }
})
