module.exports = {
  lintOnSave: false, // 关闭eslint规则检查

  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-plugin-px2rem")({
            rootValue: 75, // 设置转换基数，会自动根据该基数进行rem值转换，如设置75，页面写入高度175px 则== 1775/75rem,该值通常根据设计稿等分数进行计算，使用淘宝方案等分就是10份
            mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
            minPixelValue: 3, //设置要替换的最小像素值(3px会被转rem)。 默认 0
            exclude: /(node_module)/, // 排除指定的包，不对其进行转换，通常用于指定第三方包，默认为false
          }),
        ],
      },
    },
  },

  devServer: {
    open: true, // 自动打开浏览器
    proxy: {
      // 配置代理
      "/api": {
        // 只处理以/api开头的请求
        target: "http://localhost:3001", // 转发的目标地址
        changeOrigin: true, // 支持跨域
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
