// 01) oddNumbers function

// TODO: Implement the oddNumbers function

function oddNumbers(startNumber, endNumber) {
  if (endNumber < 0) {
    return "last parameter expected to be positive";
  }
  if (startNumber < 0) {
    startNumber = 0;
  }
  let result = "";
  for (let i = startNumber; i <= endNumber; i++) {
    if (i % 2 === 1) {
      result += i + ",";
    }
  }
  return result;
}

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

// console.log(oddNumbers(-10, 10));

// console.log(oddNumbers(2, -10));

// 02) charCount function

// TODO: Implement the charCount function

function charCount(word, character) {
  if (character.length !== 1) {
    return;
  }
  let result = 0;
  word = word.toLowerCase();
  character = character.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    let currentChar = word[i];
    if (currentChar === character) {
      result += 1;
    }
  }
  return result;
}

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
