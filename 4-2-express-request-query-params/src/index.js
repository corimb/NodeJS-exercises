const express = require('express');
const cors = require('cors');

// create server
const server = express();

// set express middleware
server.use(express.json());
server.use(cors());

// init express aplication
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// static server
const staticServerPath = './public';
server.use(express.static(staticServerPath));

// users

const users = []; // fake users data base
users.push({
  name: 'Maricarmen',
  email: 'maricarmen@gmail.com',
});

users.push({
  name: 'Maricarmen1',
  email: 'maricarmen1@gmail.com',
});

users.push({
  name: 'Maricarmen2',
  email: 'maricarmen2@gmail.com',
});

// api endpoints

server.post('/user', (req, res) => {
  console.log('Query params:', req.query);
  console.log('Query param userName:', req.query.userName);
  console.log('Query param userEmail:', req.query.userEmail);

  // add new user to daba base
  users.push({
    name: req.query.userName,
    email: req.query.userEmail,
  });

  res.json({
    result: 'User created'
  });
});


// get users using filter

server.get('/users', (req, res) => {

  let usersResults = users;
  const filterByName =req.query.filterByName;
  const filterByEmail = req.query.filterByEmail;

  if(filterByName && filterByName.length > 0){
    usersResults = users.filter(user => user.name.includes(filterByName)) 
  } if(filterByEmail && filterByEmail.length > 0){
    usersResults = users.filter(user => user.email.includes(filterByEmail)) 
  } 

  res.json({
    result: usersResults
  });
  
});
