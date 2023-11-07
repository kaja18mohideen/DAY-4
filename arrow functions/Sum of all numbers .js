const numbers = [1, 2, 3, 4, 5];

const sumArray = (arr) => {
    return arr.reduce((acc, num) => acc + num, 0);
};

const totalSum = sumArray(numbers);
console.log(totalSum);
