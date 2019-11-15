module.exports = {
  mode: "development",
  entry: "./index",
  output: {
    filename: "bundle.js",
    path: __dirname + "/../back/public"
  },

  resolve: {
    extensions: [".js", ".jsx"]
  },
  context: __dirname,
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-react", "@babel/env"]
        }
      }
    ]
  },
  devtool: "source-map"
};
