function checkNumberType(num) {
    if (num > 0) {
        return "positive";
    } else if (num < 0) {
        return "negative";
    } else {
        return "zero";
    }
}

// Example usage:
console.log(checkNumberType(5));    // Output: "positive"
console.log(checkNumberType(-3));   // Output: "negative"
console.log(checkNumberType(0));    // Output: "zero" 
