const numbers = [2, 3, 4, 5, 6, 7, 8, 9];

const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const getPrimeNumbers = (arr) => {
    return arr.filter((num) => isPrime(num));
};

const primeNumbers = getPrimeNumbers(numbers);
console.log(primeNumbers);
