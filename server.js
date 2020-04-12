const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// initialize .env variables first
require('dotenv').config();

const app = express();

const port = process.env.SERVER_PORT;

const distDir = path.join(__dirname, 'dist');

// middlewares
app.use(bodyParser.json());

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

app.listen(port, () => console.log(`\nServer started on port ${port}.\n`));
