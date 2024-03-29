const { 
  override, 
  fixBabelImports,
  addWebpackAlias,
  addBundleVisualizer,
  // addWebpackExternals,
  addLessLoader
} = require('customize-cra');
const path = require('path');
const resolve = url => path.resolve(__dirname, url)

module.exports = override(
  // 按需加载
  fixBabelImports('import', [{
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  },{
    libraryName: "react-use",
    libraryDirectory: "lib",
    camel2DashComponentName: false
  }]),

  // addWebpackExternals({
  //   react: "React",
  //   "react-dom": "ReactDom"
  // }),

  // 添加 webpack-bundle-analyzer
  +process.env.BUNDLE_VISUALIZE === 1 && addBundleVisualizer(),
  
  // 添加less
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { 
      // '@primary-color': '#1DA57A' 
    },
  }),
  
  // 添加alias
  addWebpackAlias({
    '@': resolve('src'),
    'lib': resolve('src/lib'),
    'hooks': resolve('src/lib/hooks'),
    'assets': resolve("src/assets"),
    'components': resolve("src/components"),
    // "@ant-design/icons/lib/dist$": resolve("./src/icons")
  })
)