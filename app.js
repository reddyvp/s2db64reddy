var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var friendRouter = require('./routes/friend');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');

var resourceRouter = require("./routes/resource")

var friend = require("./models/friend");

// We can seed the collection if needed on  
async function recreateDB() {
  // Delete everything 
  await friend.deleteMany();

  let instance1 = new
    friend({
      name: "ghost", age: 25,
      height: 25.4
    });
  instance1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved")
  });
  let instance2 = new
    friend({
      name: "reddy", age: 25,
      height: 21
    });
  instance2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved")
  });
  let instance3 = new
    friend({
      name: "vamsi", age: 21,
      height: 25
    });
  instance3.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved")
  });
}

let reseed = true;
if (reseed) { recreateDB(); }


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
app.use('/friends', friendRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter);
app.use('/resource',resourceRouter)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
const connectionString = process.env.MONGO_CON
var mongoose = require('mongoose');
mongoose.connect("mongodb+srv://vamsi:vamsi@cluster0.uz6cv.mongodb.net/friends?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
//Get the default connection 
var db = mongoose.connection;

//Bind connection to error event  
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function () {
  console.log("Connection to DB succeeded")
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
