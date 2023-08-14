const { library } = require('./build.json');

module.exports = {
  alias: {
    '@': './src',
  },
  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        library,
        engineScope: "@alilc",
        extraAssets: [ // 额外资产包的配置
          'https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.1.0/build/lowcode/assets-prod.json', // 原子组件
          'https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.0.3/build/antd-lowcode/assets-prod.json' // antd design 组件
        ]
      },
    ],
    [
      '@alilc/build-plugin-alt',
      {
        type: 'component',
        inject: true,
        library,
        // 配置要打开的页面，在注入调试模式下，不配置此项的话不会打开浏览器
        // 支持直接使用官方 demo 项目：https://lowcode-engine.cn/demo/index.html
        openUrl: 'https://lowcode-engine.cn/demo/index.html?debug',
      },
    ],
  ],
};
