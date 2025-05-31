// ✅ Basic Input and Output

let name = prompt("Enter your name:");
let age = +prompt("Enter your age:");
console.log(`Hello ${name}, you are ${age} years old!`);

let str1 = prompt("Enter first string:");
let str2 = prompt("Enter second string:");
console.log(`${str1} ${str2}`);

let city = prompt("Enter your city:");
let country = prompt("Enter your country:");
console.log(`Full address: ${city}, ${country}`);

let hobby1 = "Reading";
let hobby2 = "Gaming";
let hobby3 = "Traveling";
console.log(`My hobbies are: ${hobby1}, ${hobby2}, ${hobby3}`);

let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let yourAge = +prompt("Enter your age:");
console.log(`${firstName} ${lastName} is ${yourAge} years old.`);


// ✅ Arithmetic Operations

let num1 = +prompt("Enter first number:");
let num2 = +prompt("Enter second number:");
console.log(`Sum: ${num1 + num2}`);
console.log(`Difference: ${num1 - num2}`);
console.log(`Product: ${num1 * num2}`);
console.log(`Quotient: ${num1 / num2}`);
console.log(`Remainder: ${num1 % num2}`);


// ✅ User Info and Calculations

let studentName = prompt("Enter your name:");
let mark1 = +prompt("Enter marks of subject 1:");
let mark2 = +prompt("Enter marks of subject 2:");
let mark3 = +prompt("Enter marks of subject 3:");
let average = (mark1 + mark2 + mark3) / 3;
console.log(`${studentName}, your average marks are: ${average}`);


let personName = prompt("Enter your name:");
let personAge = +prompt("Enter your age:");
console.log(`${personName} will be ${personAge + 10} in 10 years`);


let favNumber = +prompt("Enter your favorite number:");
console.log(`Your favorite number times 2 is: ${favNumber * 2}`);


let salary = +prompt("Enter your current salary:");
let increasedSalary = salary * 1.1;
console.log(`Your new salary after 10% increase is: ${increasedSalary}`);


let quantity = +prompt("Enter product quantity:");
let price = +prompt("Enter product price:");
console.log(`Total bill is: ${quantity * price}`);


let number = +prompt("Enter a number:");
console.log(`Your number + 10 = ${number + 10}`);


let birthYear = +prompt("Enter your birth year:");
let currentYear = new Date().getFullYear();
console.log(`Your age is: ${currentYear - birthYear}`);


let str = prompt("Enter a string:");
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());
console.log("Title Case:", str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());



// ✅ String Operations

let userName = prompt("Enter your name:");
console.log(`Your name has ${userName.length} characters.`);


let word = prompt("Enter a word:");
console.log("Uppercase:", word.toUpperCase());
console.log("Lowercase:", word.toLowerCase());


let sentence = prompt("Enter a sentence with extra spaces:");
console.log("Cleaned:", sentence.trim());


let inputWord = prompt("Enter a word:");
console.log(`Includes 'a':`, inputWord.includes("a"));


let fullName = prompt("Enter a name:");
console.log("First 3 letters:", fullName.substring(0, 3));


let greeting = prompt("Enter a string:");
console.log("Starts with 'Hello':", greeting.startsWith("Hello"));


let sentence2 = prompt("Enter a sentence:");
console.log("With dashes:", sentence2.replace(/ /g, "-"));


let n = prompt("Enter a name:");
let a = +prompt("Enter age:");
console.log(`${n} is ${a} years old. In 5 years, he will be ${a + 5}.`);


let s = prompt("Enter a string:");
console.log("Repeated:", s.repeat(3));


let msg = prompt("Write a short message:");
console.log("Updated message:", msg.replace(/bad/gi, "good"));
