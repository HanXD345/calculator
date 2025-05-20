const numButtons = document.querySelectorAll(".button");
const resultsSection = document.querySelector(".results-body");
let firstNum = null;
let operation = null;
let secondNum = null;
let significant = 0;

const operate = (operation, a, b) => {
    if (operation === "+") {
        return Number(a) + Number(b)
    } else if (operation === "-") {
        return Number(a) - Number(b)
    } else if (operation === "*") {
        return Number(a) * Number(b)
    } else if (operation === "/") {
        return Number(a) / Number(b)
    }
}

for (let button of numButtons) {
    button.addEventListener("click", (event) => {
        resultsSection.textContent = resultsSection.textContent === "0" 
                                        ? event.target.textContent 
                                        : resultsSection.textContent.concat("", event.target.textContent);
        if (significant === 0) {
            firstNum = resultsSection.textContent;
        } else {
            secondNum = resultsSection.textContent;
        };
        console.log(`First num: ${firstNum}`);
        console.log(`Second num: ${secondNum}`);
    });
};

operationButtons = document.querySelectorAll(".operation");

for (let operation of operationButtons) {
    operation.addEventListener("click", (event) => {
        if (event.target.textContent === "=") {
            if (firstNum === null) {
                ;
            } else if (firstNum !== null && secondNum === null) {
                resultsSection.textContent = firstNum;
            } else {
                resultsSection.textContent = operate("+", firstNum, secondNum);
                firstNum = resultsSection.textContent;
                secondNum = null;
                significant = 0;
            }
        } else {
            if (significant === 0) {
                significant = 1;
                operation = event.target.textContent;
                resultsSection.textContent = "0";
            } else {
                resultsSection.textContent = operate(operation, firstNum, secondNum);
                firstNum = secondNum;
                secondNum = null;
            }
        }
    })
}

// Resets the calculator
const resetButton = document.querySelector(".reset");

resetButton.addEventListener("click", () => {
    resultsSection.textContent = "0";
});

// Changes the sign of the current number
const signButton = document.querySelector(".sign-change");

signButton.addEventListener("click", () => {
    resultsSection.textContent = resultsSection.textContent[0] !== "-" 
                                    ? `-${resultsSection.textContent}`
                                    : resultsSection.textContent.slice(1, resultsSection.textContent.length);
    console.log(resultsSection.textContent);
});

// Changes the current number to its relative percentage value
const percentButton = document.querySelector(".percent");

percentButton.addEventListener("click", () => {
    resultsSection.textContent = Number(resultsSection.textContent) / 100;
});