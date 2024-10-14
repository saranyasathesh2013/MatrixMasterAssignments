//1. Filter numbers between start and end range
function filterRange(numbersArray, startNumber, endNumber) {
  let filteredArray = numbersArray.filter(
    (filteredNumbers) =>
      filteredNumbers >= startNumber && filteredNumbers <= endNumber
  );
  return filteredArray;
}

const numbersArray = [5, 6, 3, 8, 2, 9];
console.log(filterRange(numbersArray, 2, 3));

//2. You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

let ram = { name: "Ram", age: 35 };
let vishnu = { name: "Vishnu", age: 25 };
let ganesh = { name: "Ganesh", age: 30 };
let shiva = { name: "Shiva", age: 45 };

let users = [ram, vishnu, ganesh, shiva];

let names = users.map((userNames) => userNames.name);
console.log(names);

//3. Get the average of age

function getAverageAge(users) {
  let totalAge = users.reduce(
    (accumulator, user) => (accumulator += user.age),
    0
  );
  let averageAge = totalAge / users.length;
  console.log(averageAge);
}

getAverageAge(users);
