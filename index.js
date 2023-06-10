

const http = require("http");
const { onServernError, onSeverListening } = require("./server-events/file");

const app = require("./app")
const server = http.createServer(app);

const { HTTPPORT: PORT } = require("./handlers/configurations")

server.listen(PORT);

server.on("error", (err) => onServernError(err, PORT))

/**
* Event listener for HTTP server "listening" event.
*/
server.on('listening', () => onSeverListening(server))

















































































































// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;

/**
 * Listen on provided port, on all network interfaces.
 */
