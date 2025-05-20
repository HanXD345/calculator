const numButtons = document.querySelectorAll(".button");
const resultsSection = document.querySelector(".results-body");
let firstNum = null;
let operationApplied = null;
let secondNum = null;

// Determines which number should be manipulated
// based on input
let significant = 0;

// Calculator Operations
const operate = (operation, a, b) => {
    a = Number(a)
    b = Number(b)
    if (operation === "+") {
        return a + b
    } else if (operation === "-") {
        return a - b
    } else if (operation === "*") {
        return a * b
    } else if (operation === "/") {
        if (b === 0) {
            alert("Don't");
            return
        } else if (a / b % 1 !== 0) {
            result = a / b;
            return Number(result.toFixed(8));
        }
        return Number(a) / Number(b);
    }
}

// Applies event listeners to each button, and 
// shows the content accordingly to the results
// section
for (let button of numButtons) {
    button.addEventListener("click", (event) => {
        if (significant === 0) {
            firstNum = resultsSection.textContent === "0"
                        ? event.target.textContent 
                        : resultsSection.textContent.concat("", event.target.textContent);
            resultsSection.textContent = firstNum;
        } else {
            secondNum = resultsSection.textContent === firstNum 
                            ? event.target.textContent 
                            : resultsSection.textContent.concat("", event.target.textContent);
            resultsSection.textContent = secondNum;
        };
        console.log(`First num: ${firstNum}`);
        console.log(`Second num: ${secondNum}`);
    });
};

// Applies operations to the given expression
operationButtons = document.querySelectorAll(".operation");

for (let operation of operationButtons) {
    operation.addEventListener("click", (event) => {
        if (event.target.textContent === "=") {
            if (firstNum === null) {
                ;
            } else if (firstNum !== null && secondNum === null) {
                resultsSection.textContent = firstNum;
            } else {
                resultsSection.textContent = operate(operationApplied, firstNum, secondNum);
                firstNum = resultsSection.textContent;
                secondNum = null;
                significant = 0;
            }
        } else {
            if (significant === 0) {
                significant = 1;
                operationApplied = event.target.textContent;
            } else {
                resultsSection.textContent = operate(operationApplied, firstNum, secondNum);
                firstNum = resultsSection.textContent;
                secondNum = null;
                operationApplied = event.target.textContent;
            }
        }
    })
}

// Resets the calculator
const resetButton = document.querySelector(".reset");

resetButton.addEventListener("click", () => {
    resultsSection.textContent = "0";
    firstNum = null;
    secondNum = null;
});

// Changes the sign of the current number
const signButton = document.querySelector(".sign-change");

signButton.addEventListener("click", () => {
    resultsSection.textContent = Number(resultsSection.textContent) * -1
    if (significant === 0) {
        firstNum *= -1
    } else {
        secondNum *= -1
    }
    console.log(resultsSection.textContent);
});

// Changes the current (significant) number to its relative percentage value
const percentButton = document.querySelector(".percent");

percentButton.addEventListener("click", () => {
    resultsSection.textContent = Number(resultsSection.textContent) / 100;
});