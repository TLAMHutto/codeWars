/* //find the max and min of the array
function findMaxAndMin(array) {
    var max = array[0]; //initialize max
    var min = array[0]; //initialize min
    for (var i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
        if (array[i] < min) {
            min = array[i];
        }
    }
    return [max, min];

    //return [max, min];
}
console.log(findMaxAndMin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//output: [10, 1]
//function validtePIN(pin)
//only accept 4 numbers or 6 numbers
//return false if characters are not numbers
//return true if 4 numbers or 6 numbers
function validatePIN(pin) {
    if (pin.length === 4 || pin.length === 6) {
        for (var i = 0; i < pin.length; i++) {
            if (isNaN(pin[i])) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}
console.log(validatePIN(":234"));
//function mergeArrays(arr1, arr2) to merge arr1 and arr2 into one array
//must be in ascending order
//arr1 and arr2 must be integers and must be sorted
function mergeArrays(arr1, arr2) {
    var newArray = [];
    var i = 0;
    var j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            newArray.push(arr1[i]);
            i++;
        } else {
            newArray.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        newArray.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        newArray.push(arr2[j]);
        j++;
    }
    return newArray;
}
console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));
//class Kata to find volume of cuboid
// statis getVolumeOfCuboid
class Kata {
    static getVolumeOfCuboid(length, width, height) {
        return length * width * height;
    }
}
console.log(Kata.getVolumeOfCuboid(2, 3, 4));
//function usdcny(usd) to convert usd to cny
// return two decimal places
// result + "Chinese Yuan"
function usdcny(usd) {
    var cny = usd * 6.75;
    return cny.toFixed(2) + " Chinese Yuan";
}
console.log(usdcny(100));
//function doubleChar(str) to double every character in a string
//return a string
function doubleChar(str) {
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        newStr += str[i] + str[i];
    }
    return newStr;
}
console.log(doubleChar("hello"));
//function explode(s), input of digits 0-9
//return a string where each digit is repeated a number of times equal to its value
function explode(s) {
    var newStr = "";
    for (var i = 0; i < s.length; i++) {
        newStr += s[i].repeat(s[i]);
    }
    return newStr;
}
console.log(explode("1234"));
//Array.prototype.remove_ =function(integer_list, values_list) to remove all values in values_list from integer_list
//return a new array
Array.prototype.remove_ = function(interger_list, values_list) {
    var newArray = [];
    for (var i = 0; i < interger_list.length; i++) {
        if (!values_list.includes(interger_list[i])) {
            newArray.push(interger_list[i]);
        }
    }
    return newArray;
}
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].remove_([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 3, 5, 7, 9]));
//function palindrome(num) to check if a number is a palindrome
//return true if num is a palindrome
//return false if num is not a palindrome or num is single digit
//return "Not valid" if num is not a number or is less than 0
function palindrome(num) {
    if (isNaN(num) || num < 0) {
        return "Not valid";
    }
    if (num < 10) {
        return true;
    }
    var newNum = num;
    var reverseNum = 0;
    while (newNum > 0) {
        reverseNum = reverseNum * 10 + newNum % 10;
        newNum = Math.floor(newNum / 10);
    }
    if (num === reverseNum) {
        return true;
    }
    return false;
}
console.log(palindrome(1221));
//function validParentheses(parens) to check if parentheses are valid
//return true if parentheses are valid
//return false if parentheses are not valid
//return "Not valid" if parens is not a string
function validParentheses(parens) {
    if (typeof parens !== "string") {
        return "Not valid";
    }
    var count = 0;
    for (var i = 0; i < parens.length; i++) {
        if (parens[i] === "(") {
            count++;
        }
        if (parens[i] === ")") {
            count--;
        }
        if (count < 0) {
            return false;
        }
    }
    if (count === 0) {
        return true;
    }
    return false;
}
console.log(validParentheses("()"));
//function spacify(str) to return string with spaces between each character
//return a string
function spacify(str) {
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        newStr += str[i] + "";
    }
    return newStr;
}
console.log(spacify("hello"));
//function hexToDec(hex) to convert hex number from string to decimal
//return a number
function hexToDec(hex) {
    var newNum = 0;
    for (var i = 0; i < hex.length; i++) {
        if (hex[i] === "A") {
            newNum += 10 * Math.pow(16, hex.length - i - 1);
        } else if (hex[i] === "B") {
            newNum += 11 * Math.pow(16, hex.length - i - 1);
        } else if (hex[i] === "C") {
            newNum += 12 * Math.pow(16, hex.length - i - 1);
        } else if (hex[i] === "D") {
            newNum += 13 * Math.pow(16, hex.length - i - 1);
        } else if (hex[i] === "E") {
            newNum += 14 * Math.pow(16, hex.length - i - 1);
        } else if (hex[i] === "F") {
            newNum += 15 * Math.pow(16, hex.length - i - 1);
        }
        else {
            newNum += parseInt(hex[i]) * Math.pow(16, hex.length - i - 1);
        }
    }
    return newNum;
}
console.log(hexToDec("BCDE"));
//function to return a sting in reverse
//return true if string is a palindrome
//return false if string is not a palindrome
//return "Not valid" if string is not a string
function palindrome2(str) {
    if (typeof str !== "string") {
        return "Not valid";
    }
    var newStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    if (newStr === str) {
        return true;
    }
    return false;
}
console.log(palindrome2("a"));
//function to reverse string
function reverse(str) {
    var newStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
console.log(reverse("hello"));
//ternary function to return a string in reverse
function reverse2(str) {
    return str.length > 0 ? reverse2(str.substr(1)) + str[0] : "";
}
console.log(reverse2("hello"));
//function to check if string is a palindrome
//return true if string is a palindrome
//return false if string is not a palindrome
function palindrome3(str) {
    var newStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    if (newStr === str) {
        return true;
    }
    return false;
}
console.log(palindrome3("a"));
//function to check if array
//return true if array is an array
//return false if array is not an array
function isArray(array) {
    return Array.isArray(array);
}
console.log(isArray([1, 2, 3, 4, 5]));
//function to return string as lowercase
//return false if not a string
function toLowerCase(str) {
    if (typeof str !== "string") {
        return false;
    }
    return str.toLowerCase();
}
//function that returns true is all is lowercase
//return false if not all is lowercase  
function isLowerCase(str) {
    if (typeof str !== "string") {
        return false;
    }
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== str[i].toLowerCase()) {
            return false;
        }
    }
    return true;
}
//function that returns true if all is uppercase
//return false if not all is uppercase
function isUpperCase(str) {
    if (typeof str !== "string") {
        return false;
    }
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== str[i].toUpperCase()) {
            return false;
        }
    }
    return true;
}
//function isNotPalindrome(str) to check if string is not a palindrome, convert string to all lowercase
//return true if string is not a palindrome, if argument is undefined or not a string
//return false if string is a palindrome
function isNotPalindrome(str) {
    if (typeof str !== "string") {
        return true;
    }
    var newStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i].toLowerCase();
    }
    if (newStr === str.toLowerCase()) {
        return false;
    }
    return true;
}
console.log(isNotPalindrome("kayak"));
//function convertHourToSec(hour) to convert hour to seconds
//return false if input is negative
//return false if input is null, undifined, or boolean
//if input is string with numbers, convert to number
//if string contains NaN, return false
function convertHourToSec(hour) {
    if (typeof hour !== "number") {
        if (typeof hour !== "string") {
            return false;
        }
        if (isNaN(hour)) {
            return false;
        }
        hour = parseInt(hour);
    }
    if (hour < 0) {
        return false;
    }
    return hour * 3600;
}
console.log(convertHourToSec("a"));
//function getLowestNumber that takes in three arguments
//return the lowest number
//return false if input is not a number
//return false if input is null, undefined, or boolean
//if input is string with numbers, convert to number
//if string contains NaN, return false
function getLowestNumber(num1, num2, num3) {
    if (typeof num1 !== "number") {
        if (typeof num1 !== "string") {
            return false;
        }
        if (isNaN(num1)) {
            return false;
        }
        num1 = parseInt(num1);
    }
    if (typeof num2 !== "number") {
        if (typeof num2 !== "string") {
            return false;
        }
        if (isNaN(num2)) {
            return false;
        }
        num2 = parseInt(num2);
    }
    if (typeof num3 !== "number") {
        if (typeof num3 !== "string") {
            return false;
        }
        if (isNaN(num3)) {
            return false;
        }
        num3 = parseInt(num3);
    }
    if (num1 < num2 && num1 < num3) {
        return num1;
    }
    if (num2 < num1 && num2 < num3) {
        return num2;
    }
    if (num3 < num1 && num3 < num2) {
        return num3;
    }
    return false;
}
console.log(getLowestNumber(1,2,-2));
//function addStringsLength that takes in two strings
//return the sum of the lengths of the two strings
//return false if input is not a string
//return false if input is null, undefined, or number
function addStringsLength(str1, str2) {
    if (typeof str1 !== "string") {
        return false;
    }
    if (typeof str2 !== "string") {
        return false;
    }
    return str1.length + str2.length;
}
console.log(addStringsLength(2, "b"));
//function subtract that takes in two inputs
//return the difference of the two inputs
//if input is not a number, return false
//if string, convert to number
//if string contains NaN, return false
function subtract(num1, num2) {
    if (typeof num1 !== "number") {
        if (typeof num1 !== "string") {
            return false;
        }
        if (isNaN(num1)) {
            return false;
        }
        num1 = parseInt(num1);
    }
    if (typeof num2 !== "number") {
        if (typeof num2 !== "string") {
            return false;
        }
        if (isNaN(num2)) {
            return false;
        }
        num2 = parseInt(num2);
    }
    return num1 - num2;
}
console.log(subtract(2, true));
//function calculateChange that takes in two inputs(totalPaid and totalCost)
//return two decimal numbers representing the change 
//if input is not a number, return false
//if string, convert to number
//if string contains NaN, return false
function calculateChange(totalPaid, totalCost) {
    if (typeof totalPaid !== "number") {
        if (typeof totalPaid !== "string") {
            return false;
        }
        if (isNaN(totalPaid)) {
            return false;
        }
        totalPaid = parseInt(totalPaid);
    }
    if (typeof totalCost !== "number") {
        if (typeof totalCost !== "string") {
            return false;
        }
        if (isNaN(totalCost)) {
            return false;
        }
        totalCost = parseInt(totalCost);
    }
    return ("$") + (totalPaid - totalCost).toFixed(2).toString();
}
console.log(calculateChange(7,4.75));
//function mutliplyBy2 that takes in one input and returns the input multiplied by 2
//if input is not a number, return false
//if string, convert to number
//if string contains NaN, return false
function multiplyBy2(num) {
    if (typeof num !== "number") {
        if (typeof num !== "string") {
            return false;
        }
        if (isNaN(num)) {
            return false;
        }
        num = parseInt(num);
    }
    return num * 2;
}
console.log(multiplyBy2("4"));
//create object called aboutMe
//create property called name
//create property called age
//create property called city
//create property called state
let aboutMe = {
    name: "Keaton",
    age: "31",
    city: "Longview",
    state: "TX",
    food: ["pizza", "burgers", "sushi"]
}
//access the pizza in food property
console.log(aboutMe.food[0]);
var car = {
    year: 2020,
    make: "honda",
    model: "fit",
    has4Wheels: true,
    leather: true,
    wheels: 4,
    doors: 2,
    stereo: false,
    radioStations: [104.5, 95.1,101.1,"wrr", 105.3,"kntu",96.1]
}
//console.log "I drive a " car.make + "and I like to listen to " + car.radioStations[2] + car.radioSations[3]
let info = ("I drive a " + car.make + " and I like to listen to " + car.radioStations[2] + " and " + car.radioStations[3]);
//write on html page the info
document.write(info);
//make info red and bold
document.write("<p style='color:red; font-weight:bold;'>" + info + "</p>");
//create method called getYear that returns the year
//create object called date with getYear method
let date = {
    getYear: function () {
        return this.year;
    }
}
//console.log the year
console.log(date.getYear());
//object called animals with properties and methods
let animals = {
    name: "cat",
    legs: 4,
    color: "black",
    speak: function () {
        return "meow";
    }
}
//console.log the speak method
console.log(animals.speak());
//create a method from aboutMe object that returns age - 10
let aboutMe2 = {
    age: 31,
    getAge: function () {
        return this.age - 10;
    }
}
//console.log the age - 10
console.log(aboutMe2.getAge());
//create object with first name and last name properties
//store this object in a variable called person
let person = {
    firstName: "Keaton",
    lastName: "Hutto",
}
//add a sayHello method to the person object
person.sayHello = function () {
    return "Hello, my name is " + this.firstName + " " + this.lastName;
}
//console.log the sayHello method
console.log(person.sayHello()); */
/* var shoppers = [
    {name: 'Cameron', amount: 180},
    {name: 'Ryan', amount: 250},
    {name: 'George', amount: 320},
] */
//create foreach loop that iterates through the shoppers array
//console.log the name and amount of each shopper
/* shoppers.forEach(function (shopper) {
    var discount = shopper.amount - (shopper.amount * 0.12);
    if (shopper.amount > 200) {
        console.log(shopper.name + " your total was " + shopper.amount + " but since your total was greater than $200 a discount of %12 was added, bringing your total to " + "$" + discount);
}   else { 
    console.log(shopper.name + " your total is " + "$" + shopper.amount);
}
}

);*/
 var books = [
    {
        title: "Ready Player One",
        author: {
            firstName: "Ernest",
            lastName: "Cline"
        }
    },
    {
        title: "The Shining",
        author: {
            firstName: "Stephen",
            lastName: "King"
        }
    },
    {title: "The Martian",
    author: {
        firstName: "Andy",
        lastName: "Weir"
    }
    },
    {title: "The Hobbit",
     author: {
            firstName: "J.R.R",
            lastName: "Tolkien"
     }
},
    {title: "Green, Eggs, and Ham",
    author: {
        firstName: "Dr.",
        lastName: "Suess"
    }
}
]
//create foreach loop that iterates through the books array
//console.log the title and author of each book
/* books.forEach(function (book) {
    console.log(book.title + " by " + book.author.firstName + " " + book.author.lastName);
}
); */
//create a function named createBook that accepts title, author last name, and author first name
//return an object with the title, author last name, and author first name
/* function createBook(title, authorLastName, authorFirstName) {
    return {
        title: title,
        author: {
            lastName: authorLastName,
            firstName: authorFirstName
        }
    }
}
console.log(createBook("Ready Player One", "Cline", "Ernest")); */
//create function called showBookInfo that accepts title
//return author last name and author first name from books array
/* function showBookInfo(title) {
    let book = books.find(function (book) {
        return book.title === title;
    }
    );
    return book.author.firstName + " " + book.author.lastName;
}
console.log(showBookInfo("The Hobbit"));  */
//create function called base with baseNumber as a parameter
//create function called sub with subNumber as a parameter
//nest sub inside base
//sub returns baseNumber + subNumber 
/* function base(baseNumber) {
    function sub(subNumber) {
        return baseNumber + subNumber;
    }
    return sub;
}
console.log(base(5)(2)); */
//create a function called boom that takes a array of numbers
//split each number into single digits
//if 7 appears return "boom!"
//else return "click!"
/* function boom(array) {
    let newArray = [];
    array.forEach(function (number) {
        let digits = number.toString().split("");
        digits.forEach(function (digit) {
            newArray.push(digit);
        }
        );
    }
    );
    let result = newArray.find(function (number) {
        return number === "7";
    }
    );
    if (result) {
        return "boom!";
    }
    else {
        return "click!";
    }
}
console.log(boom([1, 2,  4, 5, 6, 9, 8, 9, 10])); */
//create function grid(N)
//size of grid is N x N
//return a grid of N x N with alplhabetically ordered letters
//convert N to string
//create a for loop that iterates through the grid
/* function grid(N) {
    let grid = "";
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            grid += String.fromCharCode(65 + i + j);
        }
        grid += "\n";
    } if (N < 0) { 
        return null;
    }

    return grid;
}
console.log(grid(14));   */
//create function called oddCount(n) that counts the number of positive odd less and n
//function should stop is n is less than 0
/* function oddCount(n) {
    let count = 0;
    while (n > 0) {
        if (n % 2 !== 0) {
            count++;
        }
        n--;
    }
    return count - 1;
}
console.log(oddCount(10));
 */
//create function called getAge(inputString)
//convert inputsting to integer
//return the number from inputString
/* function getAge(inputString) {
    return parseInt(inputString);
}
console.log(typeof getAge("32 years")); */
//create function maps(x) to accept an array
//return new array with values multiplied by 2
/* function maps(x) {
    let newArray = [];
    x.forEach(function (number) {
        newArray.push(number * 2);
    }
    );
    return newArray;
}
console.log(maps([1, 2, 3, 4, 5])); */
//create function called zeroFuel(distanceToPump, mpg, fuelLeft)
//if distanceToPump is less than or equal to fuelLeft times mpg return true
//else return false
/* function zeroFuel(distanceToPump, mpg, fuelLeft) {
    if (distanceToPump <= fuelLeft * mpg) {
        return true;
    }
    else {
        return false;
    }
}
console.log(zeroFuel(100, 50, 2)); */
//create function called greet(name)
//return "Hello, " + name + "how are you today?"
/* function greet(name) {
    return "Hello, " + name + "how are you today?";
} */
//create function palindrome(num)
//if input is a palindrome return true
//if input is NaN or negative or equals string return "Not valid"
//if input is not a palindrome return false
/* function palindrome(num) {
    if (typeof num === "string") {
        return "Not valid";
    }
    if (num < 0 || num === 0) {
        return "Not valid";
    }
    let string = num.toString();
    let reversed = string.split("").reverse().join("");
    if (string === reversed) {
        return true;
    }
    else {
        return false;
    }
}
console.log(palindrome("1221")); */
//create function soulution(number)
//find the sum of all multiples of 3 and 5 less than number
/* function solution(number) {
    let sum = 0;
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(solution(10)); */
//create function digital_root(n)
//for each digit in n add the digits together
//if the sum is greater than 9 repeat the process
//else return the sum
/* function digital_root(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    if (sum > 9) {
        return digital_root(sum);
    }
    else {
        return sum;
    }
}
console.log(digital_root(942)); */
//create functiion duplicateCount(text)
//count the number of times a letter appears in text
//not case sensitive
/* function duplicateCount(text) {
    let count = 0;
    let letters = text.toLowerCase().split("");
    let unique = letters.filter(function (letter, index, array) {
        return array.indexOf(letter) === index;
    }
    );
    unique.forEach(function (letter) {
        if (letters.filter(function (letter2) {
            return letter === letter2;
        }
        ).length > 1) {
            count++;
        }
    }
    );
    return count;
}
console.log(duplicateCount("aabbcde"));
 */
//function humanReadable(seconds)
//convert seconds to hours, minutes, seconds
//return a string in the format: 1 hour(s), 2 minute(s), 3 second(s)
/* function humanReadable(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let seconds2 = seconds % 60;
    let result = "";
    if (hours > 0) {
        result += hours + " hour(s), ";
    }
    if (minutes > 0) {
        result += minutes + " minute(s), ";
    }
    if (seconds2 > 0) {
        result += seconds2 + " second(s)";
    }
    return result;
}
console.log(humanReadable(567601)); */
//function likes(names)
//if names is empty return "no one likes this"
//if names has one name return "name likes this"
//if names has two names return "name and name like this"
//if names has three names return "name, name and name like this"
//if names has four or more names return "name, name and (length of array -2) others like this"
/* function likes(names) {
    let length = names.length;
    if (length === 0) {
        return "no one likes this";
    }
    else if (length === 1) {
        return names[0] + " likes this";
    }
    else if (length === 2) {
        return names[0] + " and " + names[1] + " like this";
    }
    else if (length === 3) {
        return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    }
    else {
        return names[0] + ", " + names[1] + " and " + (length - 2) + " others like this";
    }
}
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
 */
//function createPhoneNumber(numbers)
//return a string in the format: "(123) 456-7890"
/* function createPhoneNumber(numbers) {
    let result = "(";
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
        if (i === 2) {
            result += ") ";
        }
        else if (i === 5) {
            result += "-";
        }
    }
    return result;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); */
//function aplhabetPosition(text)
//return a string of the positions of the letters in text
//if letter is not in text return "not found"
/* function alphabetPosition(text) {
    let result = "";
    let letters = text.toLowerCase().split("");
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    letters.forEach(function (letter) {
        if (alphabet.indexOf(letter) !== -1) {
            result += alphabet.indexOf(letter) + 1 + " ";
        }
    }
    );
    return result;
}
console.log(alphabetPosition("The sunset sets at twelve o' clock.")); */
//function tribonacci(signature,n)
//return the array of the first n tribonacci numbers

/* function tribonacci(signature, n) { 
    let result = signature;
    if (n === 1) {
        return [n];
    } else if (n === 0) {
        return [];
    } else {
    for (let i = 0; i < n - 3; i++) {
        result.push(result[i] + result[i + 1] + result[i + 2]);
    }
    }
    return result;

}
console.log(tribonacci([1, 1, 1], 10)); */
//decodeMorse = function(morseCode)
//return a string of the letters in morse code
/* decodeMorse = function (morseCode) {
    let result = "";
    let morse = morseCode.split("   ");
    morse.forEach(function (word) {
        let letters = word.lowercase.split(" ");
        letters.forEach(function (letter) {
            result += MORSE_CODE[letter];
        }
        );
        result += " ";
    }
    );
    return result;
}
console.log(decodeMorse(".... . -.--   .--- ..- -.. .")); */
//toMorseCode = function(text)
//return a string of the morse code of the letters in text
/* toMorseCode = function (text) {
    let result = "";
    let letters = text.toLowerCase().split("");
    letters.forEach(function (letter) {
        result += MORSE_CODE[letter] + " ";
    }
    );
    return result;
}
console.log(toMorseCode("Hello World")); */
//var uniqueInOrder = function(iterable)
//takes in sequence and returns a list of items without any elements with the same value next to each other
/* var uniqueInOrder = function (iterable) {
    let result = [];
    let letters = iterable.split("");
    letters.forEach(function (letter) {
        if (result.indexOf(letter) === -1) {
            result.push(letter);
        }
    }
    );
    return result;
}
console.log(uniqueInOrder("AAAABBBCCDAABBB")); */
// function isPangram(string)
//return true if string contains all letters of the alphabet
/* function isPangram(string) {
    let letters = string.toLowerCase().split("");
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let result = true;
    alphabet.forEach(function (letter) {
        if (letters.indexOf(letter) === -1) {
            result = false;
        }
    }
    );
    return result;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog.")); */
//function countSmileys(arr)
//return the number of smileys
/* function countSmileys(arr) {
    let result = 0;
    arr.forEach(function (smiley) {
        if (smiley.match(/^[:;][-~]?[)D]$/)) {
            result++;
        }
    }
    );
    return result;
}
console.log(countSmileys([':)', ';(', ';}', ':-D'])); */
//function getCount(str)
//return the number of vowels in the string
/* function getCount(str) {
    let vowelsCount = 0;
    let vowels = "aeiou".split("");
    let letters = str.split("");
    letters.forEach(function (letter) {
        if (vowels.indexOf(letter) !== -1) {
            vowelsCount++;
        }
    }
    );
    return vowelsCount;
}
console.log(getCount("abracadabra")); */
//function squareDigits(num)
//square each digit and return the concatenated result
/* function squareDigits(num) {
    let result = "";
    let digits = num.toString().split("");
    digits.forEach(function (digit) {
        result += Math.pow(digit, 2);
    }
    );
    return parseInt(result);
}
console.log(squareDigits(9119)); */
//function disemvowel(str)
//return the string with all uppercase and lowercase vowels removed
/* function disemvowel(str) {
    let vowels = "aeiou".split("");
    let letters = str.split("");
    let result = "";
    letters.forEach(function (letter) {
        if (vowels.indexOf(letter.toLowerCase()) === -1) {
            result += letter;
        }
    }
    );
    return result;
}
console.log(disemvowel("Hello World")); */
//function getMiddle(s)
//if string is even length, return the two middle characters
//if string is odd length, return the middle character
/* function getMiddle(s) {
    let result = "";
    let letters = s.split("");
    if (letters.length % 2 === 0) {
        result = letters[letters.length / 2 - 1] + letters[letters.length / 2];
    } else {
        result = letters[Math.floor(letters.length / 2)];
    }
    return result;
}
console.log(getMiddle("test")); */
//function rot13(message)
//return the string with each character shifted 13 places
/* function rot13(message) {
    let result = "";
    let letters = message.split("");
    letters.forEach(function (letter) {
        if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
            result += String.fromCharCode(letter.charCodeAt(0) + 13 > 90 ? letter.charCodeAt(0) + 13 - 26 : letter.charCodeAt(0) + 13);
        } else if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {
            result += String.fromCharCode(letter.charCodeAt(0) + 13 > 122 ? letter.charCodeAt(0) + 13 - 26 : letter.charCodeAt(0) + 13);
        } else {
            result += letter;
        }
    }
    );
    return result;
} */
//function generateHashtag(str)
//retrun string with first letter capitalized and "#" added to the start and spaces removed
/* function generateHashtag(str) {
    let result = "";
    let letters = str.split(" ");
    letters.forEach(function (letter) {
        result += letter.charAt(0).toUpperCase() + letter.slice(1);
    }
    );
    return result.length > 139 || result.length === 0 ? false : "#" + result;
}
console.log(generateHashtag("Hello world")); */
//function zeros(n)
//return the number of trailing zeros in n!
/* function zeros(n) {
    let result = 0;
    for (let i = 5; i <= n; i *= 5) {
        result += Math.floor(n / i);
    }
    return result;
}
console.log(zeros(30)); */
//function score(dice)
//three 1's => 1000 points
//three 6's =>  600 points
//three 5's =>  500 points
//three 4's =>  400 points
//three 3's =>  300 points
//three 2's =>  200 points
//one   1   =>  100 points
//one   5   =>   50 point
//array alwasys has 5 elements
/* function score(dice) {
    let result = 0;
    let counts = {};
    dice.forEach(function (die) {
        counts[die] = counts[die] ? counts[die] + 1 : 1;
    }
    );
    if (counts[1] >= 3) {
        result += 1000;
    }
    if (counts[6] >= 3) {
        result += 600;
    }
    if (counts[5] >= 3) {
        result += 500;
    }
    if (counts[4] >= 3) {
        result += 400;
    }
    if (counts[3] >= 3) {
        result += 300;
    }
    if (counts[2] >= 3) {
        result += 200;
    }
    if (counts[1] >= 1 && counts[5] >= 1) {
        result += 50;
    }
    return result;
} */
//function count (string)
//count the number of times a character appears in a string
/* function count(string) {
    let result = {};
    let letters = string.split("");
    letters.forEach(function (letter) {
        result[letter] = result[letter] ? result[letter] + 1 : 1;
    }
    );
    return result;
} */
//function toWeirdCase(string)
//index each word at 0
//string with even indexed characters in uppercase and odd indexed characters in lowercase
/* function toWeirdCase(string) {
    let result = "";
    let words = string.split(" ");
    words.forEach(function (word) {
        let letters = word.split("");
        letters.forEach(function (letter, index) {
            if (index % 2 === 0) {
                result += letter.toUpperCase();
            } else {
                result += letter.toLowerCase();
            }
        }
        );
        result += " ";
    }
    );
    return result.trim();
} */
/* //function cleanString(s)
//each # removes the previous character
function cleanString(s) {
let result = "";
let letters = s.split("");
letters.forEach(function (letter, index) {
    if (letter === "#") {
        result = result.slice(0, -1);
    } else {
        result += letter;
    }
}
);
return result;
}
console.log(cleanString("abc#d##c")); */
//multiplicationTable = function(size)
//return each row as array multiplication N x N of size
/* multiplicationTable = function (size) {
    let result = [];
    for (let i = 1; i <= size; i++) {
        let row = [];
        for (let j = 1; j <= size; j++) {
            row.push(i * j);
        }
        result.push(row);
    }
    return result;
}   */ 
//function validPhoneNumber(phoneNumber)
//return true if phone number is valid
/* function validPhoneNumber(phoneNumber) {
    let result = false;
    let numbers = phoneNumber.split("");
    if (numbers.length === 13) {
        if (numbers[0] === "(" && numbers[1] ===" "," "," " && numbers[4] === ")" && numbers[5] === " "," "," " && numbers[9] === " "," "," "," ") {
            result = true;
        }
    }
    return result;
}
console.log(validPhoneNumber('(213) 456-7890'));  */
//create a deck of cards
/* function createDeck() {
    let result = [];
    let suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
    let values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
    suits.forEach(function (suit) {
        values.forEach(function (value) {
            result.push(value + " of " + suit);
        });
    });
    return result;
}
//shuffle the deck
function shuffle(deck) {
    let result = [];
    let cards = deck.slice();
    while (cards.length > 0) {
        let index = Math.floor(Math.random() * cards.length);
        result.push(cards.splice(index, 1)[0]);
    }
    return result;
}
//deal the cards
function deal(deck) {
    let result = [];
    for (let i = 0; i < 5; i++) {
        result.push(deck.pop());
    }
    return result;
}
//function play(deck)
//return the result of the game
function play(deck) {
    let result = {
        you: deal(deck),
        dealer: deal(deck)
    };
    let score = scoreHand(result.you);
    if (score === 21) {
        return "You win!";
    }
    while (score < 21) {
        result.you.push(deck.pop());
        score = scoreHand(result.you);
    }
    if (score > 21) {
        return "You lose!";
    }
    let dealerScore = scoreHand(result.dealer);
    while (dealerScore < 17) {
        result.dealer.push(deck.pop());
        dealerScore = scoreHand(result.dealer);
    }
    if (dealerScore > 21) {
        return "You win!";
    }
    if (dealerScore > score) {
        return "You lose!";
    }
    if (dealerScore < score) {
        return "You win!";
    }
    return "You tied!";
}
//function scoreHand(hand)
//return the score of the hand
function scoreHand(hand) {
    let result = 0;
    let aces = 0;
    hand.forEach(function (card) {
        let value = card.split(" ")[0];
        if (value === "Ace") {
            aces++;
        } else if (value === "Jack" || value === "Queen" || value === "King") {
            result += 10;
        } else {
            result += parseInt(value);
        }
    });
    while (aces > 0 && result <= 11) {
        result += 10;
        aces--;
    }
    return result;
}
//function playBlackjack()
//play a game of blackjack
function playBlackjack() {
    let deck = shuffle(createDeck());
    console.log(play(deck));
}
playBlackjack();
//# sourceMappingURL=app.js.map */
//function ipToInt32(ip)
//return the integer representation of an IP address
/* function ipToInt32(ip) {
    let result = 0;
    let octets = ip.split(".");
    octets.forEach(function (octet) {
        result = result * 256 + parseInt(octet);
    });
    return result;
}
 */
//function dup(s)
//remove consecutive duplicate characters in each string in an array
/* function dup(s) {
    let result = [];
    s.forEach(function (str) {
        let letters = str.split("");
        let newStr = "";
        letters.forEach(function (letter, index) {
            if (letter !== letters[index - 1]) {
                newStr += letter;
            }
        });
        result.push(newStr);
    });
    return result;
} */
//function function letterFilter(arr)
//return new array with only letters that appear in the original array
/* function letterFilter(arr) {
    let result = [];
    arr.forEach(function (str) {
        let letters = str.split("");
        letters.forEach(function (letter) {
            if (letter.match(/[a-z]/)) {
                result.push(letter);
            }
        });
    });
    return result;
}
console.log(letterFilter(["2", "1", "a", "b", "c"])); */
//function findOutlier(integers)
//return the outlier integer
/* function findOutlier(integers) {
    let evens = [];
    let odds = [];
    integers.forEach(function (num) {
        if (num % 2 === 0) {
            evens.push(num);
        } else {
            odds.push(num);
        }
    });
    if (evens.length === 1) {
        return evens[0];
    } else {
        return odds[0];
    }
} */
//snail = function(array)
//return array in snail order
/* function snail(array) {
    let result = [];
    let row = 0;
    let column = 0;
    let maxRow = array.length - 1;
    let maxColumn = array[0].length - 1;
    while (row <= maxRow && column <= maxColumn) {
        for (let i = column; i <= maxColumn; i++) {
            result.push(array[row][i]);
        }
        row++;
        for (let i = row; i <= maxRow; i++) {
            result.push(array[i][maxColumn]);
        }
        maxColumn--;
        for (let i = maxColumn; i >= column; i--) {
            result.push(array[maxRow][i]);
        }
        maxRow--;
        for (let i = maxRow; i >= row; i--) {
            result.push(array[i][column]);
        }
        column++;
    }
    return result;
} */
/* var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];
    //function libraryToArray(library)
    //return the readingStatus of each book in the library
    function libraryToArray(library) {
        let result = [];
        library.forEach(function (book) {
            result.push(book.readingStatus);
        });
        return result;
    }
    console.log(libraryToArray(library)); */
    //function to return only even numbers in an array
    /* function evenArray (arr){
        let array = [];
        arr.forEach(function (num){
            if (num % 2 === 0){
                array.push(num);
            }
        });
        return array;
    }
    console.log(evenArray([1,2,3,4,5,6,7,8,9,10])); */
   /*  var groovy = ['Ben', 'Mike', 'Sally', 'Joe', 'Bob', 'Sam', 'Carl', 'Frank']
    //var to pick two random names from an array
    function pickTwo(arr){
        let random = Math.floor(Math.random() * arr.length);
        let random2 = Math.floor(Math.random() * arr.length);
        while (random === random2){
            random2 = Math.floor(Math.random() * arr.length);
        }
        //remove random and random2 from array
        //run untill there are no more names in the array
        while (arr.length > 0){
            arr.splice(random, 1);
        arr.splice(random2, 1);
        return [arr[random], arr[random2]];
    }
    }
    console.log(pickTwo(groovy));  
    console.log(groovy); */
    /* var names = ['Ben', 'Mike', 'Sally', 'Joe', 'Bob', 'Sam', 'Carl', 'Frank'] */
//var to pick two random names from an array
/* function pickTwo(arr) {
  let result = [];
  while (arr.length > 0) {
    let random = Math.floor(Math.random() * arr.length);
    let random2 = Math.floor(Math.random() * arr.length);
    while (random === random2) {
      random2 = Math.floor(Math.random() * arr.length);
    }
    //remove random and random2 from array
    //run untill there are no more names in the array
    let val1, val2;
    if (random < random2) {
      val2 = arr.splice(random2, 1)[0];
      val1 = arr.splice(random, 1)[0];
    } else {
      val1 = arr.splice(random, 1)[0];
      val2 = arr.splice(random2, 1)[0];
    }
    result.push([val1, val2]);
  }
  return result;
}
console.log(pickTwo(names));
console.log(names); */
//function to return the sum of all numbers in an array
/* function sum(arr) {
    let result = 0;
    arr.forEach(function (num) {
        result += num;
    });
    //if array is empty, return "sum is not available"
    if (result === 0) {
        return "sum is not available";
    } else {
        return result;
    }
}
console.log(sum(['1','2'])); */
//function to sort numbers in an array
/* function sort(arr) {
    let result = [];
    while (arr.length > 0) {
        let min = arr[0];
        let minIndex = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
                minIndex = i;
            }
        }
        result.push(arr.splice(minIndex, 1)[0]);
    }
    return result;
}
console.log(sort([2,2,5,-4,1,6,'a',9,'b',8,10])); */
//Write a function definition named firstAndSecond that takes in sequence and returns the first and second value of that sequence as an array
/* function firstAndSecond(arr){
    return [arr[0], arr[1]];
} */
// Write a function definition named firstAndLast that takes in sequence and returns the first and last value of that sequence as an array
/* function firstAndLast(arr){
    return [arr[0], arr[arr.length - 1]];
} */
//function firstAndLast(arr) moves first value to the end
/* function firstAndLast(arr){
    let first = arr.shift();
    arr.push(first);
    return arr;
}
console.log(firstAndLast([1,2,3,4,5]));
//function called sumAll that sums all numbers in an array
function sumAll(arr){
    let result = 0;
    arr.forEach(function (num){
        result += num;
    });
    return result;
}
console.log(sumAll([1,2,3,4,5]));
//function called mean that returns the mean of all numbers in an array
function mean(arr){
    let result = 0;
    arr.forEach(function (num){
        result += num;
    });
    return result / arr.length;
}
//function maxMinusMin that returns the difference between the largest and smallest numbers in an array
function maxMinusMin(arr){
    let result = 0;
    let max = arr[0];
    let min = arr[0];
    arr.forEach(function (num){
        if (num > max){
            max = num;
        }
        if (num < min){
            min = num;
        }
    });
    result = max - min;
    return result;
}
//function productOfAll that returns the product of all numbers in an array
function productOfAll(arr){
    let result = 1;
    arr.forEach(function (num){
        result *= num;
    });
    return result;
}
console.log(productOfAll([1,2,3,4,5]));
function getHighestNumber(arr){
    let result = arr[0];
    arr.forEach(function (num){
        if (num > result){
            result = num;
        }
    });
    return result;
}
console.log(getHighestNumber([1,2,3,4,5]));
function getSmallestNumber(arr){
    let result = arr[0];
    arr.forEach(function (num){
        if (num < result){
            result = num;
        }
    });
    return result;
}
console.log(getSmallNumber([1,2,3,4,5]));
function onlyOddNumber(arr){
    let resut = [];
    arr.forEach(function (num){
        if (num % 2 !== 0){
            resut.push(num);
        }
    }
    );
} */
//function pigIt(str) that moves first letter of each word to the end of the word and adds "ay" to the end of the word.
//leave punctuation marks untouched
/* function pigIt(str){
    let result = [];
    let words = str.split(" ");
    words.forEach(function (word){
        if (word.match(/[a-zA-Z]/)){
            result.push(word.slice(1) + word[0] + "ay");
        } else {
            result.push(word);
        }
    });
    return result.join(" ");
}
console.log(pigIt("Pig latin is cool !"));
 */
//function moveZeros(arr) move zeros to end of array
//leave other elements untouched
/* function moveZeros(arr){
    let result = [];
    arr.forEach(function (num){
        if (num !== 0){
            result.push(num);
        }
    });
    arr.forEach(function (num){
        if (num === 0){
            result.push(num);
        }
    });
    return result;
}
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) */
//function isOdd(num) 
//returns true is num is odd
//returns false if num is even
/* function isOdd(num) {
    //if num is string convert to parseInt
    if (typeof num === "string") {
        num = parseInt(num);
    }
    //if num isNaN return false
    if (isNaN(num)) {
        return false;
    }
    //if num is odd return true, else return false
    if (num % 2 !== 0) {
        return true;
    }
    return false;
}
console.log(isOdd('2')); */
//function isMultilpeOfFive(num)
/* function isMultipleOfFive(num) {
    //if num is string convert to parseInt
    if (typeof num === "string") {
        num = parseInt(num);
    }
    //if num isNaN return false
    if (isNaN(num)) {
        return false;
    }
    //if num is multiple of 5 return true, else return false
    if (num % 5 === 0) {
        return true;
    }
    return false;
}
console.log(isMultipleOfFive('10')); */
//function isMultipleOf(target, n)
/* function isMultipleOf(target, n) {
    //if target is string convert to parseInt
    if (typeof target === "string") {
        target = parseInt(target);
    }
    //if n is string convert to parseInt
    if (typeof n === "string") {
        n = parseInt(n);
    }
    //if target isNaN return false
    if (isNaN(target)) {
        return false;
    }
    //if n isNaN return false
    if (isNaN(n)) {
        return false;
    }
    //if target is multiple of n return true, else return false
    if (target % n === 0) {
        return true;
    }
    return false;
}
console.log(isMultipleOf('11', '5')); */
//function isVowel(letter)
/* function isVowel(letter) {
    //if letter is string convert to lowercase
    if (typeof letter === "string") {
        letter = letter.toLowerCase();
    }
    //if letter isNaN return false
    if (typeof letter !== "string") {
        return false;
    }
    //if letter is vowel return true, else return false
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
        return true;
    }
    return false;
}
console.log(isVowel('a')); */

/* function first(string) {
    //returns first letter of string
    return string[0];
}
console.log(first('hello'));
function twoStrings(str, str2){
    //if str2 is present in str, return str with str2 removed
    if (str.includes(str2)){
        return str.replace(str2, "");
    }
    //if str2 is in str more than once, return str with all but one instances of str2 removed
    if (str.includes(str2.value>=2)){
        return str.replace(str2++, "");
    }
    //if str2 is not in str, return str
    return str;
}
console.log(twoStrings("hello from the world", "hello hello hello" )); */
/* function isSpace(letter) {
    //if charater is space return true, else return false
    if (letter === " ") {
        return true;
    }
    return false;
}
console.log(isSpace(' ')); */
/* function squareRoot(n){
    //returns square root of n
    return Math.sqrt(n);
}
function whiteSpace(string){
    //return how many spaces are at the beginning of string
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            count++;
        }
    }
    return count;
}
console.log(whiteSpace('   hello')); */
/* function invertSign(num){
    //returns the number with its sign inverted
    return num * -1;
}
console.log(invertSign(-10));
function randomQuote(){
    //returns a random quote from the array
    let quotes = [
        "I love deadlines. I like the whooshing sound they make as they fly by.",
        "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        "Don't cry because it's over, smile because it happened.",
        "Be yourself; everyone else is already taken.",
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        "You only live once, but if you do it right, once is enough.",
        "Be the change that you wish to see in the world.",
        "In three words I can sum up everything I've learned about life: it goes on.",
        "No one can make you feel inferior without your consent.",
        "A friend is someone who knows all about you and still loves you.",
        "If you tell the truth, you don't have to remember anything.",
        "Always forgive your enemies; nothing annoys them so much.",
        "Without music, life would be a mistake.",
        "To live is the rarest thing in the world. Most people exist, that is all.",
        "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        "Life is what happens when you're busy making other plans.",
        "We become what we think about.",
        "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
        "Life is 10% what happens to you and 90% how you react to it.",
        "The most common way people give up their power is by thinking they don't have any.",]
    return quotes[Math.floor(Math.random() * quotes.length)];
}
console.log(randomQuote());
function firstTenFibonacciNumbers(){
    //returns the first 10 fibonacci numbers
    let fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    return fibonacci;
} */
//function to return first 50 prime numbers
//define what a prime number is
/* const isPrime =  (num) => {
    if(num <= 1) return false;
    for(let i = 2; i * i <= num; i++)
      if(num % i === 0) return false;
    return true;
} */
//use is isPrime to return first 50 prime numbers
/* function first50PrimeNumbers(){
    let primeNumbers = [];
    for (let i = 2; primeNumbers.length < 50; i++) {
        if (isPrime(i)) {
            primeNumbers.push(i);
        }
    }
    return primeNumbers;
}
console.log(first50PrimeNumbers()); */
/* function domainName(url){
    //returns the domain name of a url
    let domain = url.split("//")[1];
    domain = domain.split(".")[0];
    return domain;
}
console.log(domainName("http://google.com")); */

/* function firstAndThird(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 3 === 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(firstAndThird([0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); */
function divisibleByThree(){
    //iterates through 1 and 15 and returns the numbers divisible by 3
    let divisibleByThree = [];
    for (let i = 1; i <= 15; i++) {
        if (i % 3 === 0) {
            divisibleByThree.push(i);
        }
    }
    return divisibleByThree;
}
divisibleByThree();
console.log(divisibleByThree());