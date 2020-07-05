

// Counting Sheep
function countingSheep(n) {
  if (n <= 0 ) {
    return 'All sheep jumped over the fence';
  }
  else {
    console.log(`${n}: Anther sheep jumped over the fence`);
    return countingSheep(n -1)
  }
};


// Power Calculator
function powerCalulator(base, exponent) {
  if (exponent < 0) {
    return 'exponent should be greater than 0'
  }
  if (exponent === 0) {
    return 1;
  }
  if (exponent === 1) {
    return 1
  }
  return (base * powerCalulator(base, exponent-1));
}

// Reverse String
function reverseString(str) {
  if (str === '') {
    return '';    
  }
  return str.charAt(str.length - 1) + reverseString(str.slice(0, -1));
}

//nth Triangular numbers (like factorial but with addition)
function triangleNum(num) {
  if (num <= 0) {
    return 'Num must be greater than or equal to one.';
  }
  if (num === 1) {
    return num;
  }
  return num + triangleNum(num-1)
}

//String Splitter 
function splitString(string, separator) {
  if (string === '') {
    return '';
  }
  if(!string.includes(separator)) {
    return [string];
  }
  return [string.slice(0, string.indexOf(separator)), ...splitString(string.slice(string.indexOf(separator) +1), separator)];
}

//Fibonacci
function fib(n) {
  if (n === 1) {
    return [0, 1]
  }
  const seq = fib(n-1)

  seq.push( seq[seq.length - 1] + seq[seq.length - 2])
  return seq;
  }

//Factorial
function factorial(n) {
  if (num === 1) {
    return num;
  }
  return (num * factorial(num - 1))
}

//console.log(countingSheep(4))
//console.log(powerCalulator(10, 2)) //Why does this output 10?
//console.log(reverseString('Trina is awesome'))
//console.log(triangleNum(24))
//console.log(splitString('Hey what even the hell are you doing', 'e'))
console.log(fib(455))

