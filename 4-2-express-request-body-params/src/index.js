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

// api endpoints

server.post('/user', (req, res) => {
  console.log('Body params:', req.body);
  console.log('Body param userName:', req.body.userName);
  console.log('Body param userEmail:', req.body.userEmail);

  // add new user to daba base
  users.push({
    name: req.body.userName,
    email: req.body.userEmail,
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
