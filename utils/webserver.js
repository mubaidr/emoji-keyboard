var WebpackDevServer = require('webpack-dev-server')
var webpack = require('webpack')
var config = require('../webpack.config')
var env = require('./env')
var path = require('path')

require('./prepare')

var options = (config.chromeExtensionBoilerplate || {})
var excludeEntriesToHotReload = (options.notHotReload || [])

for (var entryName in config.entry) {
  if (excludeEntriesToHotReload.indexOf(entryName) === -1) {
    config.entry[entryName] = [
      ('webpack-dev-server/client?http://localhost:' + env.PORT),
      'webpack/hot/dev-server'
    ].concat(config.entry[entryName])
  }
}

config.plugins = [new webpack.HotModuleReplacementPlugin()].concat(config.plugins || [])

delete config.chromeExtensionBoilerplate

var compiler = webpack(config)

var server =
  new WebpackDevServer(compiler, {
    hot: true,
    quiet: true,
    contentBase: path.join(__dirname, '../build'),
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  })

server.listen(env.PORT)
