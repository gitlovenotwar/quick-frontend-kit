require('dotenv').config();
const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const enforce = require('express-sslify');

const isProduction = process.env.NODE_ENV === 'production';

const app = express();

const port = process.env.PORT || process.env.SERVER_PORT;

const distDir = path.join(__dirname, 'dist');


// middlewares
app.use(bodyParser.json());
app.use(compression());

if (isProduction) {
  // Use enforce.HTTPS({ trustProtoHeader: true }) in case you are behind
  // a load balancer (e.g. Heroku). See further comments below
  app.use(enforce.HTTPS({
    trustProtoHeader: true,
  }));
}

// It will load bundle.js from the html but will receive bundle.js.gz
app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

// configure header
app.use((req, res, next) => {
  const hostOrigin = req.headers.origin;
  res.header('Access-Control-Allow-Origin', hostOrigin);
  next();
});

// use static file dist
app.use(express.static(distDir));

// get static index.html
let distHTML = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
// all other routes return our app html
app.get('*', (req, res) => {
  res.send(distHTML);
});

app.listen(port, (err) => {
  if(err) throw err;
  console.log(`\nServer started on port ${port}.\n`);
});
