function nextBiggerNumber(number) {
  // split number to array
  let num = number.toString().split('');

  for (let i = num.length - 1; i > 0; i--) {
    // compare digit to previous digit
    if (num[i] > num[i - 1]) {
      // if its bigger replace them
      [num[i], num[i - 1]] = [num[i - 1], num[i]];
      // then sort digits that are placed right to digit whice we move on
      num = [...num.slice(0, i), ...num.slice(i, num.length).sort((a, b) => a - b)];
      // join digits and convert it to the number
      return +num.join('');
    }
  }

  // if we cant move any digit return '-1', that's mean that
  // we can not create bigger number with same digits
  return '-1';
}

// console.log(nextBiggerNumber(2017) == 2071)
// console.log(nextBiggerNumber(513) == 513)
// console.log(nextBiggerNumber(531) == -1)
