import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import favicon from 'serve-favicon';
import helmet from 'helmet';
import compression from 'compression';
import path from 'path';
const mongoose = require("mongoose");
const port = process.env.PORT || 3001;

import env from './config/env';
console.log('env top', env);
import routes from './routes/api';

const app = express();

/*==================================
=            Middleware            =
==================================*/
app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.use(helmet()); // Helmet helps you secure your Express apps by setting various HTTP headers.
app.use(compression());
app.use(logger('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// serve static files, this is for frontend React
app.use('/static', express.static(path.join(__dirname, 'public', 'static')));

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
console.log('env', env)
if (env.name === 'production') {
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
}

// app.listen(port, "0.0.0.0", err => {
//   if (err) {
//     console.log(err);
//   }

//   console.info(">>> 🌎 Open http://0.0.0.0:%s/ in your browser.", port);
// });
export default app;
