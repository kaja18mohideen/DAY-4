// anonymous function
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

const findMedian = function(arr1, arr2) {
    const merged = [...arr1, ...arr2].sort((a, b) => a - b);
    const length = merged.length;
    const mid = Math.floor(length / 2);
    
    if (length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
};

const median = findMedian(arr1, arr2);
console.log(median);



// IIFE

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

const median = (function(arr1, arr2) {
    const merged = [...arr1, ...arr2].sort((a, b) => a - b);
    const length = merged.length;
    const mid = Math.floor(length / 2);
    
    if (length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
})(arr1, arr2);

console.log(median);
