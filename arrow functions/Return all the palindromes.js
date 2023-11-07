const strings = ["level", "hello", "world", "deified", "javascript"];

const isPalindrome = (str) => {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
};

const getPalindromes = (arr) => {
    return arr.filter((str) => isPalindrome(str));
};

const palindromes = getPalindromes(strings);
console.log(palindromes);
