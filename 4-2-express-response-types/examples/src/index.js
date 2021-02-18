const express = require('express');
const cors = require('cors');

// create server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// create app server
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// endpoints, more info about express response: https://expressjs.com/es/api.html#res

app.get('/response-a', (req, res) => {
  res.json({ result: 'Ok' });
});

app.get('/response-b', (req, res) => {
  const htmlCode= `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Express</title>
      <link rel="stylesheet" href="http://beta.adalab.es/resources/stylesheets/all.css" >
    </head>
    <body class="page">
        <h1>Esta es una página de prueba</h1>
    </body>
  </html>`;
  res.send(htmlCode);
});

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(10);

app.get('/response-c', (req, res) => {
  if (randomNumber%2 === 0) {
    res.redirect('https://youtube.com')
  } else {
    res.redirect('https://instagram.com')
  }
});


// Cuando la usuaria haga un GET a /response-d
// con un query param user=1 o user=2 debe responder con un json con status 200 y respuesta { result: 'ok' }.
// si se llama a este endpoint sin query param o con un query param diferente de user=1 o user=2 debe responder un json { result: 'error: invalid query param' } con el status 404.

const users = require('../src/files/data-user.json');

app.get('/response-d', (req, res) => {

  const userParam = req.query.user;
  if (userParam && userParam === '1' || userParam === '2'){
    const usersData = users.find(user => user.id === userParam);
    res.status(200).json({result: 'OK', usersData})
  } else
  res.status(404).json({ result: 'error: invalid query param'})
});
