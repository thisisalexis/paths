var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const pathsRouter = require('./routes/pathsRouter');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/paths', pathsRouter);

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

//Stuffs added by me that shouldn't be deleted and are really been used
//TODO estas dos líneas deberían estar arriba, antes de todo, moverlas
const dotenv = require('dotenv'); //debería estar arriba en cargas, porque entonces las variables se están cargando en process 
dotenv.config({ path: './config.env' }); // Básicamene carga lo que está en el archivo .env y lo carga en la variable process.env que es accesible desde todos lados en la app

//Stuffs added by me that sould be deleted
console.log("Process object");
console.log(process);
console.log("Environment");
console.log(process.env);

//Server configuration
const port = process.env.PORT  || 3000;
app.listen(port, () => {
  console.log(`Node server started with express on port ${port} `);
});

module.exports = app;
 