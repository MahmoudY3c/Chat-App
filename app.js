

// const createError = require('http-errors');
const express = require('express');
const app = express();
const createError = require('http-errors');
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require("cors");

const mainRouter = require('./routes/main');
const usersRouter = require('./routes/users');

const { sessionMiddleware } = require("./middleware/sessions");

const { NODE_ENV, DOMAIN } = require("./handlers/configurations")

app.use(function (req, res, next) {
  next();
})

app.use(cors({ origin: true }))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/storage', express.static('uploads'));


app.use('/', mainRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.status = err.status || 500
  // console.log(err)
  res.locals.error = NODE_ENV === 'development' ? err : {};

  // render the error page
  res.status(res.locals.status);
  res.render('error');
});

module.exports = app
