const isProd = process.argv.includes("--productin");
const isDev = !isProd;
module.exports = {
  isProd: isProd,

  isDev: isDev,

  htmlmin: {
    collapseWhitespace: isProd
  },
  webpack: {
    mode: isProd ? "development" : "production"
  },
  imagemin: {
    verbose: true
  },
  fonter: {
    formats: ["ttf", "woff", "eot", "svg"]
  }
}