module.exports = {
    devServer: {
        disableHostCheck: true,
        proxy: {
            '/proxy': {
                target: 'https://api.imgbb.com/1', //接口的前缀'
                secure: true, //如果是https请求就加上
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/proxy': ''
                },
               
            },
            
        }

  }
  
}

