function digitalRoot(number) {
  // convert given number to string
  number = number.toString();
  // if we get number with length 1 - finish recursion and return the result
  if (number.length === 1) {
    return +number;
  } else {
    // continue same algorithm, but with number that are sum of digits from current number
    return digitalRoot(number.split('').reduce((a, b) => +a + +b));
  }
}
// console.log(func_3(4564897) === 7)
// console.log(func_3(16) === 7)
// console.log(func_3(493193) === 2)
