module.exports = {
  presets: [
    "@vue/app",
    [
      "@vue/babel-preset-jsx",
      {
        injectH: false
      }
    ]
  ],
  // 按需加载配置
  plugins: [
    [
      "import",
      { libraryName: "ant-design-vue", libraryDirectory: "es", style: true }
    ] // `style: true` 会加载 less 文件
  ]
};
