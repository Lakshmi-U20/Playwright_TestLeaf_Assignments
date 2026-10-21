//Example-1
let s = "Hello World";
function lengthOfLastWord(s) {
    // Step 1: Split the string into an array of words
    let words = s.trim().split(" ");    
    // Step 2: Find the last word in the array
    let lastWord = words[words.length - 1];
    // Step 3: Calculate the length of this word
    return lastWord. length;
}   
let result = lengthOfLastWord(s);
console.log("Length of the last word is:", result);// Output: 5

//Example-2

function lengthOfLastWord(s) {
    // Step 1: Trim the String
    const trimmedString = s.trim(); 
    // Step 2: Split the String into Words
    const words = trimmedString.split(" ");
    // Step 3: Identify the Last Word
    const lastWord = words[words.length - 1];
    // Step 4: Calculate the Length of the Last Word
    // Step 5: Return the length
    return lastWord.length;
}

let s = " fly me to the moon ";
console.log(lengthOfLastWord(s)); // Output: 4  

//Example-3
let isAnagram = (str1, str2) => {
    // Remove spaces and convert to lowercase
    let normalizedStr1 = str1.replace(/\s+/g, '').toLowerCase();
    let normalizedStr2 = str2.replace(/\s+/g, '').toLowerCase();        

    // Sort the characters
    let sortedStr1 = normalizedStr1.split('').sort().join('');
    let sortedStr2 = normalizedStr2.split('').sort().join('');  

    // Compare sorted strings
    return sortedStr1 === sortedStr2;
}

let result1 = isAnagram('listen', 'silent');
console.log(result1); // Output: true

let result2 = isAnagram('hello', 'world');
console.log(result2); // Output: false  
