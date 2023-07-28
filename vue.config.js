const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    // chainWebpack: config => {
    //     config.module
    //           .rule('fonts')
    //           .test(/\.(ttf|ttc|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/)
    //           .use('file-loader')
    //           .loader('file-loader')
    // }
})
