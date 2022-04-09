var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Loading configuration file
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' }); // Básicamene carga lo que está en el archivo .env y lo carga en la variable process.env que es accesible desde todos lados en la app

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const pathsRouter = require('./routes/pathsRouter');
const { default: mongoose } = require('mongoose');
const dbConfig = require('./configuration/db.config');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const apiVersion = process.env.VERSION || 'develop';
const contextPath = process.env.CONTEXT_PATH;


console.log(`API version is:${apiVersion} `);

app.use(`/${contextPath}/${apiVersion}/`, indexRouter);
app.use(`/${contextPath}/${apiVersion}/users`, usersRouter);
app.use(`/${contextPath}/${apiVersion}/paths`, pathsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


//Stuffs added by me that sould be deleted
//console.log("Process object");
//console.log(process);
//console.log("Environment");
//console.log(process.env);

/*
//Server configuration
const port = process.env.PORT  || 3000;
console.log(`PORT: ${port}`);
app.listen(port, () => {
  console.log(`Node server started with express on port ${port} `);
});
*/

const establishDbConnection = dbConfig.connectToDb();


module.exports = app;
 