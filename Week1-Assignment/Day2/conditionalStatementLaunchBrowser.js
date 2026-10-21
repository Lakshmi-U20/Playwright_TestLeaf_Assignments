//Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and
//`runTests` with `switch` for test type messages.

function launchBrowser(browser) {       
    if (browser === "Chrome") {
        console.log("Launching Chrome browser.");
    } else if (browser === "Firefox") {
        console.log("Launching Firefox browser.");
    } else {
        console.log("Browser not supported.");
    }
}

function runTests(testType) {       
    switch (testType) {
        case "Integration":
            console.log("Running Integration tests.");
            break;
        case "Regression":
            console.log("Running Regression tests.");
            break;
        case "end-to-end":
            console.log("Running End-to-End tests.");
            break;
        default:
            console.log("Test type not recognized.");
    }
}   

// Call the functions with sample inputs
launchBrowser("Chrome");
runTests("Integration");
