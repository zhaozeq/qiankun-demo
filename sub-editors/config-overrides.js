const path = require('path');
const autoprefixer = require('autoprefixer');
const paths = require('react-scripts/config/paths');

const { name } = require('./package');
const isDev = process.env.NODE_ENV === 'development';
const DEFAULT_BROWSERS = ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'];
const PUBLIC = isDev ? '/' : `/${name}/`;

// 除了config.output.path  还需修改appBuild路径
paths.appBuild = path.join(path.dirname(paths.appBuild), '../build/editors');

module.exports = {
  webpack: config => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.jsonpFunction = `webpackJsonp_${name}`;
    config.output.globalObject = 'window';
    config.output.path = path.resolve(__dirname, '../build/editors');
    config.output.publicPath = PUBLIC;

    config.devtool = isDev ? config.devtool : false;
    /* sass文件支持module */
    config.module.rules[1].oneOf[6].use[1].options = {
      importLoaders: 3,
      modules: true,
      sourceMap: isDev,
    };

    config.module.rules[1].oneOf = [
      ...config.module.rules[1].oneOf,
      {
        test: /\.less$/,
        exclude: path.resolve(__dirname, 'src/theme'),
        use: [
          'style-loader',
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 3,
              modules: true,
              sourceMap: isDev,
              localIdentName: '[local]__[path][name]__[hash:base64:5]',
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  overrideBrowserslist: DEFAULT_BROWSERS,
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
          {
            loader: require.resolve('less-loader'),
            options: {
              javascriptEnabled: true,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        include: path.resolve(__dirname, 'src/theme'),
        use: [
          'style-loader',
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 3,
            },
          },
          {
            loader: require.resolve('less-loader'),
            options: {
              javascriptEnabled: true,
            },
          },
        ],
      },
    ];
    // config.plugins = [
    //   ...config.plugins,
    //   new ModuleFederationPlugin({
    //     name,
    //     library: { type: "var", name },
    //     // remotes: {
    //     //   [name]: name,
    //     // },
    //     shared: ['react', 'react-dom'],
    //   }),
    // ];
    // console.log(config);
    return config;
  },
  devServer: configFunction => {
    return (proxy, allowedHost) => {
      const config = configFunction(proxy, allowedHost);
      config.headers = {
        'Access-Control-Allow-Origin': '*',
      };
      config.historyApiFallback = true;
      config.watchContentBase = false;
      config.hot = false;
      config.liveReload = false;
      return config;
    };
  },
};
