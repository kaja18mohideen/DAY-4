//anonymous function
const stringArray = ["hello", "world", "javascript"];

const convertToTitleCaps = function(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
};

const titleCapsArray = convertToTitleCaps(stringArray);
console.log(titleCapsArray);


//IIFE

const stringArray = ["hello", "world", "javascript"];

const titleCapsArray = (function(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
})(stringArray);

console.log(titleCapsArray);
