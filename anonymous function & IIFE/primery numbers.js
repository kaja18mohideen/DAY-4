//anonymous function 
const numbers = [2, 3, 4, 5, 6, 7, 8, 9];

const getPrimeNumbers = function(arr) {
    return arr.filter(num => {
        if (num < 2) return false;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
};

const primeNumbers = getPrimeNumbers(numbers);
console.log(primeNumbers);


//IIFE

const numbers = [2, 3, 4, 5, 6, 7, 8, 9];

const primeNumbers = (function(arr) {
    return arr.filter(num => {
        if (num < 2) return false;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
})(numbers);

console.log(primeNumbers);
