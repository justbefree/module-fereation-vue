const { defineConfig } = require("@vue/cli-service");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: "http://localhost:8080/",
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "platform",
        // library: { type: "var", name: "platform" },
        filename: "remoteEntry.js",
        exposes: {},
        remotes: {
          flight: "flight@http://localhost:8081/remoteEntry.js",
          hotel: "hotel@http://localhost:8082/remoteEntry.js",
          train: "train@http://localhost:8083/remoteEntry.js",
        },
        shared: require("./package.json").dependencies,
      }),
    ],
  },
  devServer: {
    port: 8080,
    proxy: {
      "/flight": {
        target: "http://test.tripm.51ykb.com",
        changeOrigin: true,
      },
      '/Hotel/Hotels': {
        target: 'http://test.tripm.51ykb.com',
        changeOrigin: true
      }
    },
  },
});
