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

  addData(newUser);
}

// Double money
function doubleMoney() {
  data = data.map(person => {
    return { ...person, money: person.money * 2 };
  });

  updateDOM();
}

// Add new object to data array
function addData(obj) {
  data.push(obj);

  updateDOM();
}

// Update DOM to reflect results
function updateDOM(providedData = data) {
  // Clear main div
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

  providedData.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('person');

    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.append(element);
  });
}

// Format number as money
function formatMoney(num) {
  return `$${num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
}

// Event listeners

addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
