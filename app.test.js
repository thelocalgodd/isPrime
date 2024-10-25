const { isPrime } = require("./app");

describe("isPrime", () => {
  test("should handle numbers less than or equal to 1", () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(0)).toBe(false);
    expect(isPrime(-1)).toBe(false);
  });

  test("should identify prime numbers correctly", () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(11)).toBe(true);
    expect(isPrime(13)).toBe(true);
    expect(isPrime(17)).toBe(true);
  });

  test("should identify non-prime numbers correctly", () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(8)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(10)).toBe(false);
    expect(isPrime(12)).toBe(false);
    expect(isPrime(15)).toBe(false);
  });

  test("should handle larger numbers", () => {
    expect(isPrime(97)).toBe(true);
    expect(isPrime(100)).toBe(false);
    expect(isPrime(997)).toBe(true);
  });
});
