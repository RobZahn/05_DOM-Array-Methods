const main = document.querySelector('#main');
const sortBtn = document.querySelector('#sort');
const doubleBtn = document.querySelector('#double');
const addUserBtn = document.querySelector('#add-user');
const calculateWealthBtn = document.querySelector('#calculate-wealth');
const showMillionairesBtn = document.querySelector('#show-millionaires');

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

// Fetch random user and add money
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api/');
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  };

  // addData(newUser);
}

// Add new object to data array
