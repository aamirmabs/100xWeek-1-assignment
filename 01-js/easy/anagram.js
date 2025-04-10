/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function returnUniqueKeyValues(array) {

  let returnObject = {};

  for (let index = 0; index < array.length; index++) {
    const element = array[index].toLowerCase();

    if (element in returnObject) {
      returnObject[element] += 1;
    } else {
      returnObject[element] = 1;
    }
  }

  return returnObject;
}

function isAnagram(str1, str2) {

  // convert both strings to arrays
  let str1Array = str1.split('');
  let str1KeyValue = returnUniqueKeyValues(str1Array);
  let s1Keys = Object.keys(str1KeyValue);

  let str2Array = str2.split('');
  let str2KeyValue = returnUniqueKeyValues(str2Array);
  let s2Keys = Object.keys(str2KeyValue);

  // return false if both strings have different key lengths
  if (s1Keys.length != s2Keys.length) {
    return false;
  }

  // else check if all keys in s1 match key pairs in s2
  for (let [key, value] of Object.entries(str1KeyValue)) {
    if (str1KeyValue[key] != str2KeyValue[key]) {
      return false;
    }
  }
  // if all checks above fail
  return true;

}

module.exports = isAnagram;
