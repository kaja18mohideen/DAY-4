// anonymous function

function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n;
    
    return [...arr.slice(k), ...arr.slice(0, k)];
}

const rotated = rotateArray([1, 2, 3, 4, 5], 2);
console.log(rotated);


//IIFE

const arr = [1, 2, 3, 4, 5];
const k = 2;

const rotated = (function(arr, k) {
    const n = arr.length;
    k = k % n;
    return [...arr.slice(k), ...arr.slice(0, k)];
})(arr, k);

console.log(rotated);
