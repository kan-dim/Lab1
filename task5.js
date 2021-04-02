function listOfFrieds(string) {
  // split string to object
  return (
    string
      .split(';')
      .map(human => ({
        // each human will contain firstName and secondName fields
        firstName: human.split(':')[0],
        secondName: human.split(':')[1],
      }))
      .sort((hum1, hum2) => {
        // if we can sort object by secondName just do it
        if (hum1.secondName === hum2.secondName) return hum1.firstName.localeCompare(hum2.firstName);
        // if we can not, sort by firstName
        else return hum1.secondName.localeCompare(hum2.secondName);
      })
      // final arr that will contain sorted guests list
      .map(human => `(${human.secondName.toUpperCase()}, ${human.firstName.toUpperCase()})`)
      // join human to final string
      .join('')
  );
}

// console.log(listOfFrieds('Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Turnbull;Raphael:Corwill;Alfred:Corwill'))
