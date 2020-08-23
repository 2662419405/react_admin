const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://work.xiejiahe.com", //搜索跨域
      changeOrigin: true,
    })
  );
};
 vb