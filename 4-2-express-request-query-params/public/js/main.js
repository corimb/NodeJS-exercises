'use strict';

// post new user

document.querySelector('.js-btn-post-new-user').addEventListener('click', () => {
  const inputName = document.querySelector('.js-input-name');
  const inputEmail = document.querySelector('.js-input-email');
  

  // create query params
  const queryParams = `?userName=${inputName.value}&userEmail=${inputEmail.value}`;

  fetch('http://localhost:3000/user' + queryParams, { method: 'POST' })
    .then(response => response.json())
    .then(responseData => {
      console.log('Server response:', responseData);
      printJson('.js-post-new-user-result', responseData);
    });
});





// get users data

// document.querySelector('.js-btn-get-users').addEventListener('click', () => {
//   fetch('http://localhost:3000/users')
//     .then(response => response.json())
//     .then(responseData => {
//       console.log('Server response:', responseData);
//       printJson('.js-get-users-result', responseData);
//     });
// });



// get users data using name and email filters:

document.querySelector('.js-btn-get-users').addEventListener('click', () => {
  const inputNameFilter = document.querySelector('.js-input-name-filter');
  const inputEmailFilter = document.querySelector('.js-input-email-filter');
  const queryParams = `?filterByName=${inputNameFilter.value}&filterByEmail=${inputEmailFilter.value}`;
  fetch('http://localhost:3000/users' + queryParams)
    .then(response => response.json())
    .then(responseData => {
      console.log('Server response:', responseData);
      printJson('.js-get-users-result', responseData);
    });
    console.log('Get users from mainjs done');
});



// helper

function printJson(selector, jsonData) {
  const jsonHtml = JSON.stringify(jsonData, null, 2);
  document.querySelector(selector).innerHTML = jsonHtml;
}
