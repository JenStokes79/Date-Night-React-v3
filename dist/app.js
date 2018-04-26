'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _env = require('./config/env');

var _env2 = _interopRequireDefault(_env);

var _api = require('./routes/api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mongoose = require("mongoose");
var port = process.env.PORT || 3006;

console.log('env top', _env2.default);


var app = (0, _express2.default)();

/*==================================
=            Middleware            =
==================================*/
app.use((0, _serveFavicon2.default)(_path2.default.join(__dirname, 'favicon.ico')));
app.use((0, _helmet2.default)()); // Helmet helps you secure your Express apps by setting various HTTP headers.
app.use((0, _compression2.default)());
app.use((0, _morgan2.default)('tiny'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
// serve static files, this is for frontend React
app.use('/static', _express2.default.static(_path2.default.join(__dirname, 'public', 'static')));

/*=====  End of Middleware  ======*/

/*===========================================
=            Baic Authentication            =
===========================================*/

// app.use(require('node-basicauth')({'haochuan': 'password'}));

/*=====  End of Baic Authentication  ======*/

/*===========================
=            COR            =
===========================*/

// app.use(require('cors')());

/*=====  End of COR  ======*/

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/datenightusers", {
  // <useMongoClient:></useMongoClient:> true
});

// API routes - list routes individually

require('./routes/api/signin')(app);
require('./routes/api/search')(app);
require('./routes/api/wheelSearch')(app);
require('./routes/api/searchMovie')(app);

// Load React App
// Serve HTML file for production
console.log('env', _env2.default);
if (_env2.default.name === 'production') {
  app.get('*', function response(req, res) {
    res.sendFile(_path2.default.join(__dirname, 'public', 'index.html'));
  });
}

// app.listen(port, "0.0.0.0", err => {
//   if (err) {
//     console.log(err);
//   }

//   console.info(">>> 🌎 Open http://0.0.0.0:%s/ in your browser.", port);
// });
exports.default = app;
//# sourceMappingURL=app.js.map