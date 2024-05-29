// 01) Spot the errors and fix them

const size = 25;
let result;

if (size > 20) {
  result = "Greater than 20";
} else if (size > 10) {
  result = "Greater than 10";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20

// 02) oddEven function

// TODO: Implement the oddEven function

function oddEven(givenNumber) {
  if (givenNumber % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even

// 03) oldYoung function
// TODO: Implement the oldYoung function

// function oldYoung(givenAge) {
//   if (typeof givenAge === "number") {
//     if (givenAge < 0) {
//       return "invalid parameter";
//     } else if (givenAge >= 50) {
//       return "elder person";
//     } else if (givenAge < 16) {
//       return "child";
//     } else if (givenAge < 50) {
//       return "young person";
//     }
//   } else {
//     return "invalid parameter";
//   }
// }

function oldYoung(givenAge) {
  if (typeof givenAge !== "number" || givenAge < 0) {
    return "invalid parameter";
  }

  if (givenAge < 16) {
    return "child";
  }
  if (givenAge < 50) {
    return "young person";
  }

  return "elder person";
}

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person
