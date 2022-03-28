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
class Kata {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume() {
        return this.length * this.width * this.height;
    }
}
var cuboid = new Kata(2, 3, 4);
console.log(cuboid.volume());









