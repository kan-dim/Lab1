function filterIntegerList(arr) {
  // just check if given element is number
  return arr.filter(elem => Number.isInteger(elem));
}

// console.log(filterIntegerList([1,'1','536', 123, 'ds']))
