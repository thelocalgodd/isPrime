![NPM Downloads](https://img.shields.io/npm/dw/%40thelocalgodd%2Fisprime)

![NPM Version](https://img.shields.io/npm/v/%40thelocalgodd%2Fisprime)


# Prime Number Checker

A simple package to check if a number is prime.

### installation

```bash
npm install @thelocalgodd/isprime
```

### usage

```javascript
const { isPrime } = require('@thelocalgodd/isprime');

console.log(isPrime(17)); // true
console.log(isPrime(4));  // false
```


## API

### isPrime(num)

Returns `true` if the number is prime, `false` otherwise.

#### Parameters

- `num` (number): The number to check

#### Returns

- (boolean): `true` if the number is prime, `false` otherwise

## License

MIT