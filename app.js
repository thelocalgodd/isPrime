/**
 * Checks if a number is prime
 * @param {number} num - number to check
 * @returns {boolean} - true if the number is prime, false otherwise
 */

function isPrime(num) {
  //
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  //
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}

module.exports = { isPrime };
