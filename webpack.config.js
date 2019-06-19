module.exports = {
    entry: [
      './src/index.ts',
      './src/index.css'
    ],
    output: {
      path: __dirname,
      publicPath: '/',
      filename: 'bundle.js'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
      rules: [
        {
            test:  /\.(t|j)sx?$/,
            use: {
                loader: 'ts-loader'
            }
        },
        {
          test: /\.js$/,
          enforce: "pre",
          exclude: /node_modules/,
          use: {
            loader: "source-map-loader"
          }
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader",
              options: {
                modules: {
                    localIdentName: '[name]_[local]_[hash:base64]',
                },
                importLoaders: 1,
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
    devtool: "source-map"
  };