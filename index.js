//find the max and min of the array
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
        newStr += str[i] + " ";
    }
    return newStr;
}
console.log(spacify("hello"));
























