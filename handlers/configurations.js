//this file is uses to access all the .env variables ineastead of require dot env in each file we want to access an env vatiable and this file also useful to handle the default values that seperated by || like (process.env.DATABASE || 'mongodb://localhost:27017/test') instead of the boilarplate of (require("dotenv").config() > const mongoURI = process.env.DATABASE || 'mongodb://localhost:27017/test') instead of this you define the vaules here and just require the value by requiring this file like (const {mongoURI} = require("./handleres/configurations"))
//so the main goal is to handle the variables that will take a new value when it's undefined and that env var is required to be accessed by multiple files
const config = require("dotenv").config();

module.exports = {
  mongoURI: process.env.DATABASE || 'mongodb://localhost:27017/test',
  DOMAIN: process.env.DOMAIN || 'localhost',
  NODE_ENV: process.env.NODE_ENV || "development",
  HTTPPORT: process.env.HTTPPORT || 80,
  HTTPPORTS: process.env.HTTPPORTS || 443,
  PORT: process.env.PORT || 3000,
  SECRET: process.env.SECRET
}