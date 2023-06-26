/* 
Quiz:

1) How do you create arrays in JS?
2) How do you access the first character of an array?
3) How do you access the last character of an array?
4) What array method searches for, and returns the index of a given value in an array? This method returns -1 if given value is not found in the array.
5) What array method loops over all elements of an array, performing a user-defined function on each iteration?
6) What array method creates a new array with elements obtained from a user-defined function?
7) What array method checks if all its elements satisfy a given condition?
8) What array method checks if at least one of its elements satisfies a given condition?
9) True or False: array.splice() modifies a copy of the array, leaving the original unchanged.
10) True or False: array.slice() copies elements from original array and returns them as a new array.
*/

let array = [1,2,3];

let arraySecond = [1,2,3];
let firstArray = arraySecond[0];
console.log(firstArray)

let arrayThird = [1,2,3];
let lastArray = arrayThird[arrayThird.length -1];
console.log(lastArray)

/* indexOf()

forEach()

map()

every()

some()

false

true */

/* 
Function Coding

1) Create a function named addToEnd that will add a passed in string to the end of a passed in array. If element to be added is not a string, return the string "error - can only add strings to an array". Otherwise, return the updated array. Use the students array and the string "Ryan" as arguments when testing.
 */



/* 
Output
addToEnd(students, "Ryan"); //["John", "Joe", "Jane", "Jessie", "Ryan"]
addToEnd(students, 045); //"error - can only add strings to an array"
*/



/* 
2) Create a function named addToStart that will add a passed in string to the start of a passed in array. If element to be added is not a string, return the string "error - can only add strings to an array". Otherwise, return the updated array. Use the students array and the string "Tess" as arguments when testing.


//Output
addToStart(students, "Tess"); //["Tess", "John", "Joe", "Jane", "Jessie", "Ryan"]
//validation check
addToStart(students, 033); //"error - can only add strings to an array"



3) Create a function named elementChecker that will check a passed in array if at least one of its elements has the same value as a passed in argument. If array is empty, return the message "error - passed in array is empty". Otherwise, return a boolean value depending on the result of the check. Use the students array and the string "Jane" as arguments when testing.

//test input
elementChecker(students, "Jane"); //true
//validation check
elementChecker([], "Jane"); //"error - passed in array is empty"


4) Create a function named checkAllStringsEnding that will accept a passed in array and a character. The function will do the ff:


if array is empty, return "error - array must NOT be empty"
if at least one array element is NOT a string, return "error - all array elements must be strings"
if 2nd argument is NOT of data type string, return "error - 2nd argument must be of data type string"
if 2nd argument is more than 1 character long, return "error - 2nd argument must be a single character"
if every element in the array ends in the passed in character, return true. Otherwise return false.

Use the students array and the character "e" as arguments when testing.

//test input
checkAllStringsEnding(students, "e"); //false
//validation checks
checkAllStringsEnding([], "e"); //"error - array must NOT be empty"
checkAllStringsEnding(["Jane", 02], "e"); //"error - all array elements must be strings"
checkAllStringsEnding(students, 4); //"error - 2nd argument must be of data type string"
checkAllStringsEnding(students, "el"); //"error - 2nd argument must be a single character"


5) Create a function named stringLengthSorter that will take in an array of strings as its argument and sort its elements in an ascending order based on their lengths. If at least one element is not a string, return "error - all array elements must be strings". Otherwise, return the sorted array. Use the students array to test.

//test input
stringLengthSorter(students); //["Joe", "Tess", "John", "Jane", "Ryan", "Jessie"]
//validation check
stringLengthSorter([037, "John", 039, "Jane"]); //"error - all array elements must be strings"


6) Create a function named startsWithCounter that will take in an array of strings and a single character. The function will do the ff:


if array is empty, return "error - array must NOT be empty"
if at least one array element is NOT a string, return "error - all array elements must be strings"
if 2nd argument is NOT of data type string, return "error - 2nd argument must be of data type string"
if 2nd argument is more than 1 character long, return "error - 2nd argument must be a single character"
return the number of elements in the array that start with the character argument, must be case-insensitive

Use the students array and the character "J" as arguments when testing.

//test input
startsWithCounter(students, "j"); //4

7) Create a function named likeFinder that will take in an array of strings and a string to be searched for. The function will do the ff:


if array is empty, return "error - array must NOT be empty"
if at least one array element is NOT a string, return "error - all array elements must be strings"
if 2nd argument is NOT of data type string, return "error - 2nd argument must be of data type string"
return a new array containing all elements of the array argument that contain the string argument in it, must be case-insensitive

Use the students array and the string "jo" as arguments when testing.

//test input
likeFinder(students, "jo"); //["Joe", "John"]


8) Create a function named randomPicker that will take in an array and output any one of its elements at random when invoked. Pass in the students array as an argument when testing.
//test input
randomPicker(students); //"Ryan"
randomPicker(students); //"John"
randomPicker(students); //"Jessie"

*/

// Number 1
function addToEnd(array, string) {
    if (typeof string !== 'string') {
      return "error - can only add strings to an array";
    }
  
    array.push(string);
    return array;
  }
  
  const students = ["John", "Joe", "Jane", "Jessie"];
  const updatedStudents = addToEnd(students, "Ryan");
  console.log(updatedStudents);


// Number 2
function addToStart(array, string) {
    if (typeof string !== 'string') {
      return "error - can only add strings to an array";
    }
  
    array.unshift(string);
    return array;
  }
  
  const startStudent = ["John", "Joe", "Jane", "Jessie"];
  const updatedStartStudent = addToStart(students, "Tess");
  console.log(updatedStartStudent);

// Number 3

function elementChecker(array, value) {
    if (array.length === 0) {
      return "error - passed-in array is empty";
    }
  
    return array.includes(value);
  }
  
  const hasJane = elementChecker(students, "Jane");
  console.log(hasJane);

// number 4

function checkAllStringsEnding(array, character) {
    if (array.length === 0) {
      return "error - array must NOT be empty";
    }
  
    if (!array.every((element) => typeof element === 'string')) {
      return "error - all array elements must be strings";
    }
  
    if (typeof character !== 'string') {
      return "error - 2nd argument must be of data type string";
    }
  
    if (character.length !== 1) {
      return "error - 2nd argument must be a single character";
    }
  
    return array.every((element) => element.endsWith(character));
  }
  
  const endsWithE = checkAllStringsEnding(students, "e");
  console.log(endsWithE);

// number 5
function stringLengthSorter(array) {
    if (!array.every((element) => typeof element === 'string')) {
      return "error - all array elements must be strings";
    }
  
    return array.sort((a, b) => a.length - b.length);
  }

  const sortedArray = stringLengthSorter(students);
  console.log(sortedArray);

// number 6

function startsWithCounter(array, character) {
    if (array.length === 0) {
      return "error - array must NOT be empty";
    }
  
    if (!array.every((element) => typeof element === 'string')) {
      return "error - all array elements must be strings";
    }
  
    if (typeof character !== 'string') {
      return "error - 2nd argument must be of data type string";
    }
  
    if (character.length !== 1) {
      return "error - 2nd argument must be a single character";
    }
  
    const regex = new RegExp('^' + character, 'i');
    const count = array.reduce((accumulator, element) => {
      if (regex.test(element)) {
        return accumulator + 1;
      }
      return accumulator;
    }, 0);
  
    return count;
  }
  
  const startsWithJCount = startsWithCounter(students, "J");
  console.log(startsWithJCount);

// number 7
function likeFinder(array, searchString) {
    if (array.length === 0) {
      return "error - array must NOT be empty";
    }
  
    if (!array.every((element) => typeof element === 'string')) {
      return "error - all array elements must be strings";
    }
  
    if (typeof searchString !== 'string') {
      return "error - 2nd argument must be of data type string";
    }
  
    const regex = new RegExp(searchString, 'i');
    const filteredArray = array.filter((element) => regex.test(element));
  
    return filteredArray;
  }
  
  const filteredStudents = likeFinder(students, "jo");
  console.log(filteredStudents);

// number 8

function randomPicker(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  
  const randomStudent = randomPicker(students);
  console.log(randomStudent);