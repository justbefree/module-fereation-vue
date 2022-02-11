const { defineConfig } = require("@vue/cli-service");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "http://localhost:8081/",
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "flight",
        // library: { type: "umd", name: "flight" },
        // library: { type: "umd" },
        filename: "remoteEntry.js",
        exposes: {
          "./vue2": "./node_modules/vue/dist/vue",
          "./flightList": "./src/components/flightList",
          "./staticFlightList": "./src/components/staticFlightList",
          "./vue2Button": "./src/components/vue2Button",
          "./vue2Count": "./src/components/vue2Count"
        },
        remotes: {
          // hotel: "hotel@http://localhost:8082/remoteEntry.js",
          train: "train@http://localhost:8083/remoteEntry.js",
        },
        shared: require("./package.json").dependencies,
      }),
    ],
  },
  devServer: {
    port: 8081,
    proxy: {
      '/flight': {
        target: 'http://test.tripm.51ykb.com',
        changeOrigin: true
      },
      "/ykb_train/train_query": {
        target: "http://test.tripm.51ykb.com",
        changeOrigin: true,
      }
    }
  }
});