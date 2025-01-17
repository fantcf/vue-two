const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
});
module.exports = {
  devServer: {
    proxy: {
      // 当请求地址以 /api 开头时，代理到目标服务器
      '/api': {
        target: 'http://192.168.2.103:3000',
        changeOrigin: true, // 是否改变请求的源头
        pathRewrite: {
          '^/api': '', // 将 /api 前缀移除
        },
      },
    },
  },
};
