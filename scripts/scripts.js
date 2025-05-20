const numButtons = document.querySelectorAll(".button");
const resultsSection = document.querySelector(".results-body");

for (let button of numButtons) {
    button.addEventListener("click", (event) => {
        resultsSection.textContent = resultsSection.textContent === "0" 
                                        ? event.target.textContent 
                                        : resultsSection.textContent.concat("", event.target.textContent);
    });
};

const resetButton = document.querySelector(".reset");

resetButton.addEventListener("click", () => {
    resultsSection.textContent = "0";
});

const signButton = document.querySelector(".sign-change");

signButton.addEventListener("click", () => {
    resultsSection.textContent = resultsSection.textContent[0] !== "-" 
                                    ? `-${resultsSection.textContent}`
                                    : resultsSection.textContent.slice(1, resultsSection.textContent.length);
    console.log(resultsSection.textContent);
})