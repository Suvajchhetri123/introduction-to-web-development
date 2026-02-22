// ============================================
//* EXERCISE 1: Array Methods (push, pop, slice, splice)
// ============================================

// 1.1 Push and Pop
const fruits = ['apple', 'banana'];

// Add 'orange'
fruits.push('orange');

// Remove last fruit and store it
const removedFruit = fruits.pop();

console.log(fruits);        // ['apple', 'banana']
console.log(removedFruit);  // 'orange'

// 1.2 Slice vs Splice
const numbers = [1, 2, 3, 4, 5];

// slice() → does NOT mutate original array
const slicedNumbers = numbers.slice(1, 4);
console.log(slicedNumbers); // [2, 3, 4]

// splice() → mutates original array
numbers.splice(1, 2, 'two', 'three');
console.log(numbers); // [1, 'two', 'three', 4, 5]

// ============================================
//* EXERCISE 2: Arrow Functions
// ============================================

// 2.1 Arrow function + template literals
const greet = (name) => {
  console.log(`hello ${name}`);
};

greet('Suva');

// 2.2 Arrow function with multiple parameters
const add = (a, b) => a + b;
console.log(add(3, 5)); // 8

// ============================================
//* EXERCISE 3: Map
// ============================================

const students = [
  { name: 'Ram', score: 85 },
  { name: 'Hari', score: 92 },
  { name: 'Shyam', score: 78 },
];

const studentNames = students.map(student => student.name);
console.log(studentNames); // ['Alice', 'Bob', 'Charlie']

// ============================================
//* EXERCISE 4: Filter
// ============================================

const products = [
  { name: 'Laptop', price: 1200 },
  { name: 'Mouse', price: 25 },
  { name: 'Monitor', price: 300 },
  { name: 'Keyboard', price: 80 },
];

const cheapProducts = products.filter(product => product.price < 100);
console.log(cheapProducts);

// ============================================
//* EXERCISE 5: Reduce
// ============================================

const prices = [10, 20, 30, 40];

const largestPrice = prices.reduce((max, price) => {
  return price > max ? price : max;
}, prices[0]);

console.log(largestPrice); // 40

// ============================================
//* EXERCISE 6: Array Destructuring
// ============================================

const colors = ['red', 'green', 'blue'];

const [firstColor, secondColor] = colors;
console.log(firstColor);  // red
console.log(secondColor); // green

// ============================================
//* EXERCISE 7: Object Destructuring
// ============================================

const person = {
  firstName: 'Suva',
  lastName: 'Chhetri',
  age: 30,
  city: 'New York',
};

// Basic destructuring
const { firstName, age } = person;
console.log(firstName, age);

// Renaming
const { firstName: first } = person;
console.log(first);

// Default values
const { country = 'USA' } = person;
console.log(country);

// ============================================
//* CHALLENGE: Combine Everything
// ============================================

const employees = [
  { id: 1, name: 'Suva', department: 'IT', salary: 75000 },
  { id: 2, name: 'Ram', department: 'HR', salary: 65000 },
  { id: 3, name: 'Shyam', department: 'IT', salary: 80000 },
  { id: 4, name: 'Hari', department: 'Finance', salary: 70000 },
];

// Filter IT employees
const itEmployees = employees.filter(emp => emp.department === 'IT');

// Map to name and salary
const itNamesAndSalaries = itEmployees.map(({ name, salary }) => ({
  name,
  salary,
}));

console.log(itNamesAndSalaries);

// Reduce to average salary
const averageItSalary =
  itEmployees.reduce((sum, emp) => sum + emp.salary, 0) /
  itEmployees.length;

console.log(averageItSalary);

// Destructure first IT employee
const [{ name: firstEmployeeName, salary: firstEmployeeSalary }] = itEmployees;
console.log(firstEmployeeName, firstEmployeeSalary);