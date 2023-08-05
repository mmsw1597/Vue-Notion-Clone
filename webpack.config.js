const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HTMLPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  resolve: {
    extensions: ['.vue', '.js'], // 생략하고 싶은 확장자 명시
    alias: {
      '~': path.resolve(__dirname, 'src') // '~' 기호는 src 폴더 시작을 의미
    } 
  },
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true // 필요 파일 외에 모든 파일을 제거한다.
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/, // .vue로 끝나는 파일을 모두 찾는다
        use: 'vue-loader' // vue 파일을 로드해서 해석하게끔 한다. 따로 설치 필요
      },
      {
        test: /\.s?css$/, // scss, css 둘다 판별
        use: [ // 순서 매우 중요! 아래에서부터 위로 loader가 실행된다.
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HTMLPlugin({
      template: './src/index.html' // path 기능이 내장되어 있어서 상대 경로도 가능
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' } // static 폴더에서 파일을 복사하여 dist로 이동 (to 옵션은 생략 가능)
      ]
    })
  ],
  devServer: {
    historyApiFallback: true
  }
}