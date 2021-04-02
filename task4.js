function numberOfPairs(arr, target) {
  // create variable which will contain amount of pairs
  let amountOfPairs = 0;

  arr.forEach((element, ind) => {
    // if the array of numbers, that are placed right to the current number,
    // contain elements that add up to target number - increase amountOfPairs by 1
    // Collect all correct numbers to array and then calc its length. It will be amount of pairs.
    amountOfPairs += arr.slice(ind + 1).filter(item => item === target - element).length;
  });
  // return amount of pairs
  return amountOfPairs;
}

console.log(numberOfPairs([1, 3, 6, 2, 2, 0, 4, 5], 5) === 4);
