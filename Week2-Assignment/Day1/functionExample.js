// Task 1: Function Declaration
function userProfile(name) {
    console.log(`Hello, ${name}!`);
}   

userProfile("Lakshmi!!!"); 

// Task 2: Arrow Function


const double = (num) => num * 2;
console.log(double(5)); a  

// Task 3: Anonymous Function

setTimeout(function() {
    console.log("This message is delayed by 2 seconds");
}, 2000); // 2000 milliseconds = 2 seconds      

// Task 4: Callback Function

function getUserData(callback) {
    setTimeout(() => {
        callback("Call Back Function");
    }, 3000);
}

getUserData((message) => {
    console.log(message);
});

