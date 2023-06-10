const session = require("express-session");
const MongoDBStore = require("express-mongodb-session")(session);
const { mongoURI, SECRET } = require("../handlers/configurations");
// const crypto =require("crypto")
// console.log(crypto.randomBytes(32).toString('base64'));

const sessionsStore = new MongoDBStore({
  uri: mongoURI,
  collection: "ChatApp-Sessions",
});

const sessionMiddleware = session({
  secret: SECRET,
  resave: false,
  saveUninitialized: true,
  store: sessionsStore,
  cookie: {
    maxAge: (1000 * 60 * 60 * 24 ) * 1 //1 day
    // sameSite: true,
  }
})

module.exports = {
  sessionsStore, sessionMiddleware
}