const numButtons = document.querySelectorAll(".button");
const resultsSection = document.querySelector(".results-body");

for (let button of numButtons) {
    button.addEventListener("click", (event) => {
        resultsSection.textContent = resultsSection.textContent === "0" 
                                        ? event.target.textContent 
                                        : resultsSection.textContent.concat("", event.target.textContent);
    })
}

const resetButton = document.querySelector(".reset");

resetButton.addEventListener("click", () => {
    resultsSection.textContent = "0";
});