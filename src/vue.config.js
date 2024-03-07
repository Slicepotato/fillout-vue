module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://fillout.com',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
                },
             }
        },
    },
}
