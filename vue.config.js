const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
    transpileDependencies: true,
    pages: {
        index: {
            entry: 'examples/main.js', //项目入口文件(默认是src/main.js,修改为examples/main.js);
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    /**
    * 拓展webpack配置,使packages加入编译;
    */
    chainWebpack: config => { //对所有packages中的js做babel处理;
        config.module
            .rule('js')
            .include.add(path.resolve(__dirname, 'packages')).end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
            // 修改其他的选项;
                return options;
            })
    }
})
