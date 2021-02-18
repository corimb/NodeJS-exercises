const express = require('express');
const cors = require('cors');
const films = require('./films-data.json');
const directors = require('./directors-data.json')

// create app server
const app = express();

// set express middlewares
app.use(express.json());
app.use(cors());

// set template engine middlewares
app.set('view engine', 'ejs');

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// endpoints

app.get('/es/film/:filmId', (req, res) => {
  // get film data
  let filmData = films.find(film => film.id === req.params.filmId);
  console.log('film data', filmData);


  const awardsYear = req.query.awardsYear;
  console.log(awardsYear)

  if (filmData && awardsYear && awardsYear.length > 0){
    const awards = filmData.awards.filter(award => award.year === awardsYear);
    filmData.awards = awards;
    console.log(awards)
  }

  // response with rendered template
  if (filmData) {
    res.render('pages/film', filmData);
  } else {
    res.render('pages/film-not-found');
  }
});

app.get('/es/director/:directorId', (req, res) => {
// get film data
const directorData = directors.find(director => director.id === req.params.directorId);
console.log('director data', directorData);
if (directorData) {
  res.render('pages/director', directorData);
} else {
  res.render('pages/director-not-found');
}
});
