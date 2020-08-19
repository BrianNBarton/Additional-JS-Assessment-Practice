"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 */


//TODO: Define a function named isOdd that takes in any input and returns true if the input is an odd number, return false for any other situation. You do not need to consider floating-point and decimal numbers.

function isOdd(num) {

    if (num % 2 == 1) {
        return true;
    }

    return false;
}


//TODO: Define a function named isVowel that takes in a single character and returns true if the character is a vowel. *Not including the letter 'y'
function isVowel(char) {
    let vowels = 'aeiouAEIOU';
    return typeof (char) === 'string' && char.length === 1 && vowels.includes(char);
}

//TODO: Define a function named combineStrings that takes in two parameters, if both parameters are strings, then return a concatenated string of both parameters. Otherwise, return false.
//

function combineStrings(str1, str2) {
    if (typeof (str1) == 'string' && typeof (str2) == 'string') {
        return str1 + str2;
    }

    return false;
}


//TODO: Define a function named sumArgs that takes in three parameters, if they are numbers then add them together. Otherwise return false.
//

function sumArgs(num1, num2, num3) {

    if (typeof (num1) == 'number' && typeof (num2) == 'number' && typeof (num3) == 'number') {
        return num1 + num2 + num3;
    }

    return false;
}

//TODO: Define a function named truncateString that takes in a string as the first parameter and a number as the second parameter. Truncate (shorten) the string by the length based on the argument passed in. For example, truncateString("hello world",1) would return "hello worl"
//

function truncateString(str, length) {
    if (typeof (str) == 'string' && typeof (length) == 'number') {
        return str.substring(0, str.length - length);
    }

    return false;
}

//TODO: Define a function named `reverseSign` that takes in a number as the first parameter. Reverse the sign of the argument passed in, return false if the argument is not a number. For example, `reverseSign(1)` would return `-1`.

function reverseSign(value) {
    return parseFloat(value) * -1 || false;
}


//TODO: Define a function named `makeUppercase` that takes in a string as the first parameter. Return the argument passed in entirely uppercased, return false if the argument is not a string. For example, `makeUppercase("test")` would return `"TEST"`.

function makeUppercase(value) {

    if (typeof (value) == 'string' && isNaN(value)) {
        return value.toUpperCase();
    }

    return false;
}

//TODO: Define a function named `isMultiple` that takes in two `number` parameters. Return `true` if one argument is a multiple of the other, `false` otherwise. For example, `isMultiple(2, 6)` would return `true`.


function isMultiple(n1, n2) {

    return n1 !== n2 && (n1 % n2 === 0 || n2 % n1 === 0);


}

//TODO: Define a function named `getInitials` that takes in two `string` parameters, `first` & `last`. Return the names combined and formatted as initials, return `false` if either parameter is invalid. For example, `getInitials("John", "Snow")` would return `"J.S."`


function getInitials(first, last) {
    if (typeof (first) == 'string' && typeof (last) == 'string') {
        if (isNaN(first) && isNaN(last)) {
            if (first.length > 0 && last.length > 0) {
                return first.slice(0, 1) + '.' + last.slice(0, 1) + '.';
            }
        }
    }

    return false;
}
function getInitials(first, last) {
    if (typeof (first) == 'string' && typeof (last == "string")) {
        if (isNaN(first) && isNaN(last)) {
            if (first.length > 0 && last.length > 0) {
                return first.slice(0, 1) + "." + last.slice(0, 1) + ".";
            }
        }
    }
    return false;
}

function canPurchase(billAmount, availableCash) {
    return availableCash > billAmount;


    // OR
    // return availableCash > billAmount;
}