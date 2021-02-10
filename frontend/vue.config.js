const path = require("path");
module.exports = {
    filenameHashing: false,
    publicPath: '/static/emailfront/vue/',
    outputDir: path.resolve(__dirname, "../emailfront/static/frontend/"),
    chainWebpack: config => {
      config.plugins.delete('html')
      config.plugins.delete('preload')
      config.plugins.delete('prefetch')
    }
};
