const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true
});
module.exports = {
    publicPath: './',
    configureWebpack: {
        resolve: {
            alias: {
                "assets": "@/assets",
                "common": "@/common",
                "components": "@/components",
                "netWork": "@/netWork",
                "views": "@/views",
            }
        }
    },
}