const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://port-0-donation-backend-2rrqq2blmpwenmp.sel5.cloudtype.app',//	# 서버 URL or localhost: 설정한포트번호
            changeOrigin: true,
        })
    );
};