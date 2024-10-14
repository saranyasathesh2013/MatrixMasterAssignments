//1. Use arrow function and avoid if else for the following
//function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Do you have your parents permission to access this page?');
//   }
// }

let permission = (age) =>
  age > 18 ? true : "Do you have your parents permission to access this page?";
console.log(permission(16));

// 2. function to find the power of n

let result = (number, power) => Math.pow(number, power);
console.log(result(3, 5));

//3. Replace with arrow function
//function ask(question, yes, no) {
//   if (confirm(question)) yes()
//     else no()
//   }

//   ask(
//     "Do you agree?",
//     function() { alert("You agreed.") },
//     function() { alert("You canceled the execution.") }
//   )

let ask = (question, yes, no) => (confirm(question) ? yes() : no());

ask(
  "Do you agree?",
   () => console.log("You agreed."),
   () => console.log("You canceled the execution.") 
);


//4. Calculator

let calculator = {
    number1: 4,
    number2: 5,
    read() {return `Number 1 is ${this.number1} and Number 2 is ${this.number2}`},
    add() {return 'The sum is ' + (this.number1 + this.number2)},
    multiply() {return 'The product is ' + this.number1 * this.number2}
}

console.log(calculator.read());
console.log(calculator.add());
console.log(calculator.multiply());

//5. min(a,b)

let minValue = (number1, number2) => number1 < number2 ? number1 : number2;
console.log(minValue(5,2));