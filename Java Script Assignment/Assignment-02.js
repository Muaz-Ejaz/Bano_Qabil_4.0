// 1. Check if a number is even or odd
const number = +prompt("Enter a number: ");
if (number % 2 === 0) {
  console.log(number + " is even");
} else {
  console.log(number + " is odd");
}

// 2. Check if a number is positive, negative, or zero
const num = +prompt("Enter a number: ");
if (num > 0) {
  console.log("Number is positive");
} else if (num < 0) {
  console.log("Number is negative");
} else {
  console.log("Number is zero");
}

// 3. Display grade based on score
const score = +prompt("Enter your score: ");
if (score > 90) {
  console.log("Excellent");
} else if (score > 75) {
  console.log("Very Good");
} else if (score > 50) {
  console.log("Average");
} else {
  console.log("Poor");
}

// 4. Check voting eligibility
const age = +prompt("Enter your age: ");
if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

// 5. Check if number is divisible by 5
const numberToCheck = +prompt("Enter a number: ");
if (numberToCheck % 5 === 0) {
  console.log("Number is divisible by 5");
} else {
  console.log("Number is not divisible by 5");
}

// 6. Check if a character is a vowel or consonant
const char = prompt("Enter a single character:");

if (char === 'a') {
    console.log("The character '" + char + "' is a vowel");
} else if (char === 'e') {
    console.log("The character '" + char + "' is a vowel");
} else if (char === 'i') {
    console.log("The character '" + char + "' is a vowel");
} else if (char === 'o') {
    console.log("The character '" + char + "' is a vowel");
} else if (char === 'u') {
    console.log("The character '" + char + "' is a vowel");
} else {
    console.log("The character '" + char + "' is a consonant");
}


// 7. Compare two numbers
const num1 = +prompt("Enter first number: ");
const num2 = +prompt("Enter second number: ");
if (num1 > num2) {
  console.log("First number is greater");
} else if (num2 > num1) {
  console.log("Second number is greater");
} else {
  console.log("Both numbers are equal");
}

// 8. Check string length
const str = prompt("Enter a word: ");
if (str.length > 5) {
  console.log("Word has more than 5 letters");
} else {
  console.log("Word has 5 or fewer letters");
}

// 9. Check if a password is strong
const password = prompt("Enter a password: ");
if (password.length >= 8) {
  console.log("Password is strong");
} else {
  console.log("Password is weak");
}

// 10. Check senior citizen discount
const personAge = +prompt("Enter your age: ");
if (personAge >= 60) {
  console.log("You can get a discount");
} else {
  console.log("You can't get a discount");
}

// 11. Check if character is uppercase or lowercase
const letter = prompt("Enter a letter: ");
if (letter === letter.toUpperCase()) {
  console.log("Letter is uppercase");
} else {
  console.log("Letter is lowercase");
}

// 12. Validate email
const email = prompt("Enter your email: ");
if (email.includes("@")) {
  console.log("Correct Email");
} else {
  console.log("Invalid Email");
}

// 13. Check if the day is a weekday or weekend
let day = prompt("Enter a day: ");
day = day.toLowerCase();
if (day === "saturday" || day === "sunday") {
  console.log("It is a weekend");
} else {
  console.log("It is a weekday");
}
