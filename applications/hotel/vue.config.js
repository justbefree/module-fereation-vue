const { defineConfig } = require("@vue/cli-service");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "http://localhost:8082/",
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "hotel",
        // library: { type: "umd", name: "hotel" },
        // library: { type: "umd" },
        filename: "remoteEntry.js",
        exposes: {
          "./hotelList": "./src/components/hotelList",
          "./hotelList2": "./src/views/hotelList"
        },
        // remotes: {
        //   flight: "flight@http://localhost:8081/remoteEntry.js",
        //   hotel: "hotel@http://localhost:8082/remoteEntry.js",
        //   train: "train@http://localhost:8083/remoteEntry.js",
        // },
        shared: require("./package.json").dependencies,
      }),
    ],
  },
  devServer: {
    port: 8082,
    proxy: {
      '/Hotel/Hotels': {
        target: 'http://test.tripm.51ykb.com',
        changeOrigin: true
      }
    }
  }
});