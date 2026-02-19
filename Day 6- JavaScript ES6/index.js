// Arrow function and Template Literals

// const greet = (name) => {
//   console.log(`Hello ${name}`);
// };

// greet("Suva");

// Array Method

// const numbers = [10, 20, 40, 60];

// // Push and Pop

// numbers.push(80);
// numbers.push(100);

// numbers.pop();
// console.log(numbers);

// Map filter and Reduce

const NumberList = [10, 20, 35, 45, 50];

const doubledNumbers = NumberList.map((numbers) => {
  return numbers * 2;
});

// console.log(doubledNumbers);

const evenNumber = NumberList.filter((numbers) => {
  return numbers % 2 === 0;
});

// console.log(evenNumber);

const TotalSum = NumberList.reduce((accumulator, currentValue) => {
  // console.log(accumulator,currentValue);
  return accumulator + currentValue;
}, 0);

// console.log(TotalSum);

// Map vanya ko for each array jastai ho
// filter vanya numbers or data lai filter garnu

// Slice and Splice
const fruits = ["apple", "banana", "orange", "mango"];
const SliceFruits = fruits.slice(1);

//console.log(SliceFruits);

fruits.splice(1, 2, "grape", "kiwi");

// console.log(fruits);

// Spread Operator

const sname = ["Sammy", "Boom", "Diddy"];

const newName = [...sname, "Suva", "Janam"];

// console.log(newName);

const user = {
  name: "Suva",
  age: 22,
  address: "Balaju Height",
};

const updatedUser = {
  ...user,
  isStudent: true,
};

// console.log(updatedUser.isStudent);

// Destructing

const [FirstName, SecondName] = newName;

// console.log(FirstName);
// console.log(SecondName);


const {name, address}=updatedUser;
console.log(name, address);

