const { defineConfig } = require("@vue/cli-service");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "http://localhost:8083/",
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "train",
        // library: { type: "umd", name: "train" },
        // library: { type: "umd" },
        filename: "remoteEntry.js",
        exposes: {
          "./trainList": "./src/components/trainList",
          "./trainListLayout": "./src/views/trainList"
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
    port: 8083,
    proxy: {
      "/ykb_train/train_query": {
        target: "http://test.tripm.51ykb.com",
        changeOrigin: true,
      },
    },
  },
});
