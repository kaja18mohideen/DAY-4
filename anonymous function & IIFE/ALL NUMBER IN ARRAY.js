//anonymous function
const numbers = [1, 2, 3, 4, 5];

const sumArray = function(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
};

const totalSum = sumArray(numbers);
console.log(totalSum);


//IIFE

const numbers = [1, 2, 3, 4, 5];

const totalSum = (function(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
})(numbers);

console.log(totalSum);
