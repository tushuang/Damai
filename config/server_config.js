const proxy = require('http-proxy-middleware');

const server_config = {
    
    host: 'localhost',
    port: 8080,
    livereload:true,
    middleware: [
        proxy('/ele', { // /lagou 这个是判断依据 当我们请求'http://localhost:8080/lagou/abc'的时候，这个代理就生效了
            target: 'https://h5.ele.me',// 配置目标服务器 当前服务器回去请求 https://m.lagou.com/lagou/abc
            changeOrigin: true,
            pathRewrite: { // https://m.lagou.com/abc
                '^/ele': ''
            }
        }),
        proxy('/api',{  //mock自己写的数据 api是一个暗号 不会加到路径中
            target: 'http://localhost:3000',
            changeOrigin: true
        })
    ]
    
}

module.exports = server_config;