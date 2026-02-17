// JavaScript Variables

var fullName = "Suva Junga Chhetri";
let address = "Kathmandu, Nepal";
const bloodGroup = "B+";

console.log("Full Name:", fullName);
console.log("Address:", address);
console.log("Blood Group:", bloodGroup);

// Data Types
let name = "Suva"; //String
let age = 22; //Number
let isStudent = true; //Boolean
let hobbies = ["Coding", "Traveling", "Cooking"]; // Array
console.log(hobbies[0]);

let user = {
  name: "Suva",
  age: 22,
  isStudent: true,
  hobbies: ["Coding", "Traveling", "Cooking"],
}; // Object

console.log(user["name"]);

// Function
function greet(name) {
  console.log("Welcome", name);
}
greet("Suva");

// DOM Manipulation
const headingElementById = document.getElementById("heading-2");
console.log("heading element by id", headingElementById);

const headingElementByQuery = document.querySelector("#heading-2");
console.log("heading element by id", headingElementById);

headingElementByQuery.textContent = "Get element by query selector";
headingElementByQuery.style.color = "blue";

const buttonElement = document.querySelector(".btn");

buttonElement.addEventListener("click", function () {
  alert("Button Clicked");
  console.log("Button Clicked");
});
