// Variables and Conditionals
//1.
const age = 35;
if(age >= 18) {
    console.log("You can vote")
}else {
    console.log("You are too young to vote")
}




// 2.
 let name = 'John'
    if (name === 'John') {
        console.log('Hello, John!')
    } else {
        console.log('You are not John')
    }


//Functions
//1.
function sum(num1 ,num2){
    return num1+num2;
}
console.log(sum(6,7))

//2.
function reverseString(str){
    return str.split('').reverse().join('');
}

console.log(reverseString('hello'))

//Arrays and Loops
//1.

const fruits = ['apple', 'banana', 'orange', 'pear']

for(i=0; i<fruits.length; i++){
    console.log(fruits[i])
}

//2.

function averageOfNumbers(numbers){

    // finding sum
    let sum = 0;
    for(i=0; i < numbers.length; i++){
        sum += numbers[i];
    }

    // findingaverage
     const average = sum/numbers.length;
     return average;    
}

const numbersArray = [1,2,3,4,5]
console.log(averageOfNumbers(numbersArray));

//3.
function findLargestNumber(numbers) {
    let largestNumber = numbers[0];  

    for (let i = 1; i < numbers.length; i++) {  
        if (numbers[i] > largestNumber) {
            largestNumber = numbers[i]; 
        }
    }
    
    return largestNumber;
}

const numbersArray1 = [56,78,45,38,90];
console.log(findLargestNumber(numbersArray1)); 

//4.

const arrWords = ['Hello','how','are','you','doing']
let sentence = "";
for(i=0; i<arrWords.length; i++){
   sentence = sentence + arrWords[i] + " "
}
console.log(sentence)

//5.
function checkName(names,name){
    let nameFound = 0;
    for(i=0; i < names.length; i++){
        if(names[i] == name){
           nameFound = 1; 
        }        
    }

    if(nameFound == 1){
        return true;
    } else {
        return false
    }
}
const namesArray=['Peter','Alex','John','Smith']
console.log(checkName(namesArray,'Robin'));

//6.

let evenNumberArray = [];
for(i=0; i<=20; i++){
    if(i%2 == 0){
        evenNumberArray.push(i);
    }
}
console.log(evenNumberArray)

// Objects
//1.

const book = {
    title: 'The Secret',
    author: 'Rhonda',
    year: 1999
};

for(const key in book){
    console.log(key,book[key])
}

//2.
const person = {
    name: 'Aadhiran',
    gender: 'male',
    age: 2
};

function readPerson(person)
{
    for(const key in person){
        console.log(key, person[key])
    }
}

readPerson(person);

// Objects as classes
//1.
const Car = {
    make: '',
    model: '',
    year: '',

    start: function() {
        console.log('Starting the car');
    },

    drive: function() {
        console.log('Driving the car');
    }
};

const myCar = Object.create(Car);
myCar.make = 'Toyato';
myCar.model = 'Yaris';
myCar.year = 2020;

myCar.start();
myCar.drive();
