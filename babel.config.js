module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // 有赞UI按需引入
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
