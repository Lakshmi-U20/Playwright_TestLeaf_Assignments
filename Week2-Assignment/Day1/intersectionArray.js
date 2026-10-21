// 1. Write a function named `intersection` that accepts two arguments, `arr1` and `arr2`, which are
// arrays of numbers, and returns an array of their intersection.

function intersection(arr1, arr2) { 
    return arr1.filter((num) => arr2.includes(num));
}

console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6])); // returns [3, 4]

// 2. Ensure no duplicate elements in the resulting array. If an element appears in both `arr1` and
// `arr2`, it should appear only once in the result.    

    function mergeArrays(arr1, arr2) {
        const mergedArray = [...arr1, ...arr2];
        const uniqueArray = [...new Set(mergedArray)];
        return uniqueArray;
    }

    const array1 = [1, 2, 3, 4, 5];
    const array2 = [4, 5, 6, 7, 8];

    console.log(mergeArrays(array1, array2)); // returns [1, 2, 3, 4, 5, 6, 7, 8]

// //3. Use a loop to find common elements. Iterate through each element of `arr1` and check if it is
// present in `arr2` and not already included in the result array.

function findCommonElements(arr1, arr2) {
  const commonElements = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !commonElements.includes(arr1[i])) {
      commonElements.push(arr1[i]);
    }
  }
  return commonElements;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];   
console.log(findCommonElements(arr1, arr2)); // Output: [4, 5]

// 4. Include example calls to the `intersection` function with different arrays to demonstrate the
// function’s functionality. Include examples with no common elements, all elements common, and
// typical cases.

function intersection(arr1, arr2) {
    // Create a new array to store the common elements
    const commonElements = [];  

    // Iterate through the first array
    for (let i = 0; i < arr1.length; i++) {
        // Check if the current element is present in the second array
        if (arr2.includes(arr1[i])) {
            // If it is, add it to the commonElements array
            commonElements.push(arr1[i]);
        }
    }   
    // Return the array of common elements  
    return commonElements;
}

console.log(intersection([1, 2, 3], [3, 4, 5])); // Output: [3]
console.log(intersection([1, 2, 3], [4, 5, 6])); // Output: []  
