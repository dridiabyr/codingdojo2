// problem 1 :

// Code:
const cars = ['Tesla', 'Mercedes', 'Honda'];
const [randomCar] = cars;
const [, otherRandomCar] = cars;
console.log(randomCar);
console.log(otherRandomCar);

// Predicted Output:

//Tesla
// Mercedes

// Problem 2:
// Code:


const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
};
const { employeeName: otherName } = employee;
console.log(otherName);
console.log(employeeName);

// Predicted Output:
// Elon
// Error: employeeName is not defined


// Problem 3:
// Code:

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
};
const password = '12345';
const { password: hashedPassword } = person;
console.log(password);
console.log(hashedPassword);
// Predicted Output:

// 12345
// undefined : The object person does not have a password property. As a result, hashedPassword is undefined.



// Problem 4:
// Code:

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers;
const [,,, second] = numbers;
const [,,,,,,,, third] = numbers;
console.log(first === second);
console.log(first === third);
// Predicted Output:

// false
// true


// problem 5:
// code :

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;

console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// Predicted Output:
// value
// [1, 5, 1, 8, 3, 3]
// 1
// 5


// problem 6: 
// code :
var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
      var name = names[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }
  actuallyPrintingNames();
}
printNames(beatles);


// predicted output:
// Paul was found at index 0
// George was found at index 1
// John was found at index 2
// Ringo was found at index 3
// name and index after loop is Ringo:4


// problem 7:
// code :

function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      let name = names[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }     

//   predicted output :
// error : name and index after loop is  not defined 



// problem 8:
// code :
const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      const name = names[index];
      console.log(name + ' was found at index ' + index);
    }
  }
  actuallyPrintingNames();
}
printNames(beatles);

// predicted output 
// Paul was found at index 0
// George was found at index 1
// John was found at index 2
// Ringo was found at index 3

// problem 9: 
// code :

const planet = {
    name: "Jupiter",
    milesFromSun: 49849,
    mass: 393983,
    composition: ["gas", "liquid", "oxygen"]
};
const planetCopy = { ...planet };
console.log(planet.composition[0] === planetCopy.composition[0]);
console.log(planet === planetCopy);


// predictedoutput

// true
// false

