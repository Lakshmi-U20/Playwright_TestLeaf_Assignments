//Write a JavaScript function that evaluates a student's score and returns their grade using a switch statement
//to assess score ranges
function evaluateGrade(score) {
    let grade;
    switch (true) {
        case (score >= 90):
            grade = "A";
            break;
        case (score >= 80):
            grade = "B";
            break;
        case (score >= 70):
            grade = "C";
            break;
        case (score >= 60):
            grade = "D";
            break;
        default:
            grade = "F";
    }
    return grade;
}   

// Example usage:
let studentScore = 95;
let studentGrade = evaluateGrade(studentScore);
console.log(`The student's grade is: ${studentGrade}`); 
