function firstNonRepeatingLetter(string) {
  for (let i = 0; i < string.length; i++) {
    //if we find letter that doesn't appear in the remaining string return this letter and finish
    if (!string.toLocaleLowerCase().includes(string[i].toLocaleLowerCase(), i + 1)) {
      return string[i];
    }
  }
  return '';
}

// console.log(firstNonRepeatingLetter('ssTrstsa') === 'r')
