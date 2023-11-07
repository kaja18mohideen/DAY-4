// anonymous function

const strings = ["level", "hello", "world", "deified", "javascript"];

const getPalindromes = function(arr) {
    return arr.filter(str => {
        const reversed = str.split('').reverse().join('');
        return str === reversed;
    });
};

const palindromes = getPalindromes(strings);
console.log(palindromes);


//IIFE

const strings = ["level", "hello", "world", "deified", "javascript"];

const palindromes = (function(arr) {
    return arr.filter(str => {
        const reversed = str.split('').reverse().join('');
        return str === reversed;
    });
})(strings);

console.log(palindromes);
