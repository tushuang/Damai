

const webpack_config = {
    mode: 'development',
    //production 压缩js文件
    entry:{
        app:'./src/javaScript/app.js'
    },
    output:{
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test: /\.html$/, // 查找被当作模块引入到js中的后缀名是.html的文件
                use: 'string-loader' // 利用string-loader来处理它  一个加载器使得HTML能模块化输出 需要安装string-loader
            },
            {
                test: /\.js$/,  //mabel 编译js
                exclude: /(node_modules|bower_components)/, // 代表不需要编译的文件夹
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    }
}

module.exports = webpack_config;