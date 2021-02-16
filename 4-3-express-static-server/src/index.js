const path = require('path');
const express = require('express');
const app = express();

// create app server
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// config express static server
const staticServerPath = './public'; // relative to the root of the project
app.use(express.static(staticServerPath));

const staticServerAdmin = './admin';
app.use(express.static(staticServerAdmin));

const staticServerContact = './public/contact'; // relative to the contact page
app.use(express.static(staticServerContact));

// not found error
app.get('*', (req, res) => {
  // relative to this directory
  const notFoundFileRelativePath = '../public/404-not-found.html';
  const notFoundFileAbsolutePath = path.join(__dirname, notFoundFileRelativePath);
  res.status(404).sendFile(notFoundFileAbsolutePath);
});
