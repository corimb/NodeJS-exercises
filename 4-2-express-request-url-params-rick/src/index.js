const express = require('express');
const cors = require('cors');
const characters = require('./data.json');

// create app server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// api endpoints

//get all characters:

app.get('/characters/all', (req, res) => {
  res.json(characters.results);
});

//get character by characterId

app.get('/characters/:characterId', (req, res) => {
  console.log('Url params:', req.params);

  // find character by characterId
  const character = characters.results.find(character => character.id == req.params.characterId);
  console.log('Found character:', character);


  // response with selected character data or error
  if (character === undefined) {
    res.json({ error: 'character-not-found' });
  } else {
    res.json(character);
  }
});

//get episodes by characterId

app.get('/characters/:characterId/episodes', (req, res) => {
  console.log('Url params:', req.params);

  // find character by characterId
  const character = characters.results.find(character => character.id == req.params.characterId);
  console.log('Found character:', character.episode);


  // response with selected character data or error
  if (character === undefined) {
    res.json({ error: 'character-not-found' });
  } else {
    res.json(character.episode);
  }
});


