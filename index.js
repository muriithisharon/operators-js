//Extract the last four characters from the string below;"extravaganza"
 
const word = "extravaganza";
const lastFourChars = word.slice(-4);

console.log(lastFourChars);

//Insert the following string at the fourth index of the below variable:"eat"const food = "The quick fox jumped over the lazy dog"

const food = "The quick fox jumped over the lazy dog"
const updatedFood = food.slice(0,4) + "eat" + food.slice(4);

console.log (updatedFood);

//Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"

const story = "The quick brown fox jumps over the lazy dog"
const countOccurrences = (str,word)=>{
    return str.toLowerCase().split(word).length -1;
};

console.log("occurrences of 'the';",countOccurrences(story,"the"));

//Using JavaScript, find the following words from the following strings:1. "are"const string1 = "The pupils are reading in the library";2. "sitting"const string2 = "The child was sitting on the table before it fell"

const string1 =  "The pupils are reading in the library";
const string2 =  "The child was sitting on the table before it fell"

console.log("contains 'are';", string1.includes("are"));
console.log("contains 'sitting';",string2.includes("sitting"));

//Convert the following strings into the specified format:1. UpperCase: "wonderful"2. LowerCase: "amazing", "UndERneath"3. Title case "A wonderful world"

const word1 = "wonderful";
const word2 = "amazing";
const word3 = "UndERneath";
const sentence = "A wonderful world";

console.log(word1.toUpperCase());
console.log(word2.toLowerCase());
console.log(word3.toLowerCase());
console.log(
    sentence
    .toLowerCase()
    .split("")
    .map(word => word.charAt(0).toUpperCase()+word.slice(1))
    .join("")
);

