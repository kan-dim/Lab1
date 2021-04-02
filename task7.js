function representationIP(numberToIp) {
  // convert given number to binary code
  let binaryCode = numberToIp.toString(2);
  // add zeroes to complete 32 bits
  let residueTo32Bits = Array(32 - binaryCode.length).fill(0);
  // create completed 32 bits binary code
  binaryCode = [...residueTo32Bits, ...binaryCode];

  // create array where we'll fill final ip
  let IP = [];

  for (let i = 8; i <= 32; i += 8) {
    // take each 8-bits binary code and convert it to decimal number
    IP.push(parseInt(binaryCode.slice(i - 8, i).join(''), 2));
  }

  // join array to result IP
  return IP.join('.');
}

// console.log(representationIP(591) === '0.0.2.79');

// console.log(representationIP(2149583361) === '128.32.10.1');

// console.log(representationIP(0) === '0.0.0.0');
