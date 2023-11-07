// anonymous function

const numbers = [1, 2, 2, 3, 4, 4, 5, 5];

const removeDuplicates = function(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
};

const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers);



//IIFE

const numbers = [1, 2, 2, 3, 4, 4, 5, 5];

const uniqueNumbers = (function(arr) {
    return arr.filter((value,
