//用于覆盖webpack配置
const {
    override,
    fixBabelImports,
    addWebpackAlias,
    addPostcssPlugins
} = require("customize-cra")
const path = require("path");
const px2Viewport=require('postcss-px-to-viewport')

module.exports = override (
    // 配置装饰器  antd按需加载
    fixBabelImports('import',{
        libraryName:'antd-mobile',
        style:'css'
    }),
    //配置别名
    addWebpackAlias({
        '@':path.join(__dirname,'src'),
        '@scss':path.join(__dirname,'src/assets/styles')
    }),
    addPostcssPlugins([
        //移动端布局 viewport适配方式
        px2Viewport[{
            //视口宽度
            viewportWidth: 375,
        }]
    ])

)