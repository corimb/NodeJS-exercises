const express = require('express');
const cors = require('cors');
const users = require('./data.json');

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

//get all users:

app.get('/users/all', (req, res) => {
  res.json(users);
});

//get user by userId

app.get('/users/:userId', (req, res) => {
  console.log('Url params:', req.params);
  console.log('Url param userId:', req.params.userId);

  // find user by userId
  const user = users.find(user => user.id === req.params.userId);
  console.log('Found user:', user);


  // response with selected user data or error
  if (user === undefined) {
    res.json({ error: 'user-not-found' });
  } else {
    res.json(user);
  }
});


//get user orders by userId:

app.get('/users/:userId/orders', (req, res) => {
  console.log('Url params:', req.params);
  console.log('Url param userId:', req.params.userId);

  // find user by orderId
  const user = users.find(user => user.id === req.params.userId);
  console.log('Found user:', user.orders);


  // response with selected user data or error
  if (user === undefined) {
    res.json({ error: 'user-not-found' });
  } else {
    res.json(user);
  }
});


// get orders by orderId:

app.get('/users/:userId/:orders/:orderId', (req, res) => {
  console.log('Url params:', req.params);
  console.log('Url param userId:', req.params.userId);
  console.log('Url params orders', req.params.orders)
  console.log('Url params orders', req.params.orderId)

  // find user by orderId
  const user = users.find(user => user.orders.id === req.params.orderId);
  console.log('Found user:', user);


  // response with selected user data or error
  if (user === undefined) {
    res.json({ error: 'user-not-found' });
  } else {
    res.json(user);
  }
});


