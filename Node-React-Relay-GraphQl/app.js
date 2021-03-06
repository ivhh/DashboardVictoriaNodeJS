"use strict";
var debug = require("debug");
var express = require("express");
var path = require("path");
var jsx = require("node-jsx");
//import schema = require('./data/schema');
var index_1 = require("./routes/index");
var user_1 = require("./routes/user");
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index_1.default);
app.use('/users', user_1.default);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err['status'] || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
app.set('port', process.env.PORT || 3000);
jsx.install({ harmony: true });
var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});
var GRAPHQL_PORT = 8000;
//var graphQLServer = express();
//graphQLServer.use('/', graphQLHTTP({ schema: schema, pretty: true }));
//graphQLServer.listen(GRAPHQL_PORT, () => {
//    console.log(`GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`);
//    mongoose.connect('mongodb://localhost/test');
//});
//# sourceMappingURL=app.js.map