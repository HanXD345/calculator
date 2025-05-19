const numButtons = document.querySelectorAll(".button");
const resultsSection = document.querySelector(".results-body");

for (let button of numButtons) {
    button.addEventListener("click", (event) => {
        if (resultsSection.textContent === "0") {
            resultsSection.textContent = event.target.textContent;
        } else {
            resultsSection.textContent += event.target.textContent;
        }
        console.log(resultsSection.textContent);
    })
}

const resetButton = document.querySelector(".reset");

resetButton.addEventListener("click", () => {
    resultsSection.textContent = "0";
    console.log(resultsSection.textContent)
});