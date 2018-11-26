const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const oauthRouter = require('./routes/oauth');
const sentencesRouter = require('./routes/sentences');
const bookingsRouter = require('./routes/bookings');
const personsRouter = require('./routes/persons');
const imagesRouter = require('./routes/image');
const relationshipsRouter = require('./routes/relationships');
const agenciesRouter = require('./routes/agencies');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

app.use('/', indexRouter);
app.use('/elite2api/oauth', oauthRouter);
app.use('/elite2api/users', usersRouter);
app.use('/elite2api/offender-sentences', sentencesRouter);
app.use('/elite2api/bookings', bookingsRouter);
app.use('/elite2api/persons', personsRouter);
app.use('/elite2api/images', imagesRouter);
app.use('/elite2api/offender-relationships', relationshipsRouter);
app.use('/elite2api/agencies', agenciesRouter);
app.get('/elite2api/health', (req, res) => {
  res.send({status: 'UP'});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {

  console.log();
  console.log('UNMATCHED:');
  console.log(req.method);
  console.log(req.originalUrl);
  console.log(req.body);
  console.log(req.headers);

  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
