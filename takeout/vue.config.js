module.exports = {
  transpileDependencies: true,
  configureWebpack:{
    resolve:{
      alias: {
        'components':'@/components',
        'route':'@/route',
        'utils':'@/utils',
        'store':'@/store',
        'assets':'@/assets',
        'views':'@/views',
        'network':'@/network'
      }
    }
  }
}
