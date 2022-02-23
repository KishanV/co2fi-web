const config = require("dotenv").config();
module.exports = {
  env: {
    ...config.parsed,
  },
  reactStrictMode: true,
};
