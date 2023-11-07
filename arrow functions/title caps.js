const stringArray = ["hello", "world", "javascript"];

const convertToTitleCaps = (arr) => {
    return arr.map((str) => str.charAt(0).toUpperCase() + str.slice(1));
};

const titleCapsArray = convertToTitleCaps(stringArray);
console.log(titleCapsArray);
