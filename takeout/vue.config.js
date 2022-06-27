module.exports = {
  transpileDependencies: true,
  configureWebpack:{
    resolve:{
      alias: {
        'common':"@/common",
        'components':'@/components',
        'route':'@/route',
        'store':'@/store',
        'assets':'@/assets'
      }
    }
  }
}
