//anonymous function

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const printOddNumbers = function(arr) {
    for (let num of arr) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    }
};

printOddNumbers(numbers);


// IIFE

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

(function(arr) {
    for (let num of arr) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    }
})(numbers);
