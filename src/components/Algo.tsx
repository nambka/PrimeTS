// // Naive way to check a prime
// function isPrime(number) {
//   if(num < 2) return false;

//   for (let k = 2; k < num; k++){
//     if( num % k == 0){
//       return false;
//     }
//   }
//   return true;
// }

export function isPrime(number: number) {
  if (number < 2) return false;
  if (number % 2 == 0) return (number == 2);
  const sqrt = Math.sqrt(number);
  for (let i = 3; i <= sqrt; i += 2) {
      if (number % i == 0) return false;
  }
  return true;
}

export function findPrimeLoop(oddNumber: number) {
  while (!isPrime(oddNumber)) {
    oddNumber -= 2;
  }
  return oddNumber
}

// Find prime < input number
export function calcPrime(number: number):string {
  var num = parseInt(number.toString());

  if (num < 0) {
    alert('Please input a positive integer!');
    return ''
  }

  if ((num == 0) || (num == 1) || (num == 2)) {
    return 'None'
  }

  if (num == 3) {
    return '2'
  }

  if (num > Number.MAX_SAFE_INTEGER) {
    return 'Input a number less than 2^53 - 1'
  }
  
  if (num % 2 == 0) {
    num -= 1;
    if (isPrime(num)) {
      return num.toString()
    } else {
      return findPrimeLoop(num).toString()
    }
  } else {
    if (isPrime(num)) num -= 2;
    return findPrimeLoop(num).toString()
  }
};

export function sieve(limit: number, initial: number): (string | number)[] {
  var bools = [];
  var primes = [];
  for (let i = 1; i < limit; i++) { bools.push(true); }
  for (let i = 1; i <= Math.sqrt(limit); i++) {
    if (bools[i-2]) {
      for (let j = i*2; j <= limit; j += i) {
        bools[j-2] = false;
      }
    }
  }
  for (let i = 0; i < initial-2; i++) { bools[i] = false; }
  for (let p = 0; p < bools.length; p++) {
    if (bools[p]) { primes.push(p+2); }
  }
  return primes.length === 0 ? ['None in Range'] : primes
};

// Benchmark
// Freezing browser
// Failsafe -1 0 1 2 2.2 10e4(99991)

// Sieve: https://www.geeksforgeeks.org/nearest-prime-less-given-number-n/
// https://stackoverflow.com/questions/3885817/how-do-i-check-that-a-number-is-float-or-integer/20779354#20779354

// Number.MAX_SAFE_INTEGER: (2^53 - 1) = 9,007,199,254,740,992 / 9007199254740992

// Number.isInteger(123) //true
// Number.isInteger(-123) //true
// Number.isInteger(5-2) //true
// Number.isInteger(0) //true
// Number.isInteger(0.5) //false
// Number.isInteger('123') //false
// Number.isInteger(false) //false
// Number.isInteger(Infinity) //false
// Number.isInteger(-Infinity) //false
// Number.isInteger(0 / 0) //false

// // Find prime <= input number
// function calcPrime(number) {
//   var num = parseInt(number)

//   if (num < 0) {
//     alert('Please input a positive integer!');
//     return ''
//   }

//   if ((num == 0) || (num == 1) || (num == 2)) {
//     return 'None'
//   }

//   if (num > Number.MAX_SAFE_INTEGER) {
//     return 'Input a number less than 2^53 - 1'
//   }
  
//   if (num % 2 == 0) {
//     num -= 1;
//     if (isPrime(num)) {
//       return num
//     } else {
//       return findPrimeLoop(num)
//     }
//   } else {
//     return findPrimeLoop(num)
//   }
// }