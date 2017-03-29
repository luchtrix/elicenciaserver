var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('./services/config'),
    db = require('./services/db'),
    http = require('http'),
    session = require('express-session'),
    helmet = require('helmet');/*,
    csrf = require('csurf');*/

var routes = require('./routes/index');
var user = require('./routes/user');

var app = express();

// view engine setup
app.set('systemName',"elicencia");
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: config.SECRET,
  name: config.NAME,
  saveUninitialized: true,
  resave: true,
  cookie: {
    httpOnly: true,
    secure: true
  }
}));

app.use(helmet());
/*app.use(csrf());
app.use(function(req, res, next) {
  res.locals._csrf = req.csrfToken();
  next();
});*/

/*second choice for csrf
app.use(function (req, res, next) {
  var token = req.csrfToken();
  res.cookie('XSRF-TOKEN', token);
  res.locals.csrfToken = token;
  next();
});
*/

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  //sessionMiddleware(req, res, next); 
  console.log('Client IP:', ip);
  next();
});

app.use('/', routes);
app.use('/apiu', user);

/*// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});*/

var server = http.createServer(app);
server.listen(config.PORT, function () {
  console.log('Servidor de '+app.get("systemName")+' Inicializado en el puerto %d', config.PORT);
});