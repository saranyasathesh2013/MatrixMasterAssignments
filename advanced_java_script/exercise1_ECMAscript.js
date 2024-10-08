// 1.Destructuring assignment

let user1 = {
    name: "John",
    years: 30,
  }

  let{name, years : age, isAdmin = false} = user1;

   console.log(name);
   console.log(age);
   console.log(isAdmin);

//2.Give the right name

ourPlanetName = "Earth";
currentVisitorName = "John";

//3. It will be Hello John - The value of John comes form the lexical scope of user variable from the if condition
let phrase = "Hello";

if (true) {
  let user = "John";
  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}
sayHi();

//4. Working with Object

const user ={
    name: "John",
    surName: "Smith"
}
user.name = "Peter"
delete user.name;

console.log(user);

//5. Yes we can as we are just changing the value of an property and not altering the object itself

const user = {
    name: "John"
  }

  user.name = "Peter";
  user.mail ="dgf"
  console.log(user);


//6. 
  let salaries = {
    Fred: 100,
    Ted: 160,
    Ghaith: 130
  }

  let salaryArray = Object.values(salaries);
  let sum = 0;
  for(salary of salaryArray){
     sum += salary;
  }
  console.log(sum)

 //7. Rewrite this if using the ternary operator '?':

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

(a + b) < 4  ? 'Below' : 'Over'

//8.Rewrite if..else using multiple ternary operators '?'.

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

login == 'Employee' ? 'Hello' : login == 'Director' ? 'Greetings' : login == '' ? 'No login' : '';
