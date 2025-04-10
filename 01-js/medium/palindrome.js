/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let origStrArray = str.split('');
  let length = origStrArray.length;

  let strArray = [];
  let strArrayReverse = [];

  // cleaning the original string
  for (let j = 0; j <= length - 1; j++) {
    let char = origStrArray[j].toLowerCase();
    // getting ASCII code of the character
    let charCode = char.charCodeAt(0);

    let validCode = false;
    if (charCode >= 65 && charCode <= 90) {
      validCode = true;
    } else if (charCode >= 97 && charCode <= 122) {
      validCode = true;
    }

    // processing a character only if it is an alphabet
    if (validCode) {
      strArray.push(char);
      strArrayReverse.unshift(char);
    }
  }

  // checking if the processed string and reverse string match
  for (let i = 0; i < strArray.length; i++) {
    if (strArrayReverse[i] !== strArray[i]) {
      console.log("Mismatch");
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
