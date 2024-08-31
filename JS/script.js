let display = document.getElementById("calcnum");
let currentOperand = "";
let operator = "";
let previousOperand = "";
let isOperatorClicked = false;

const buttons = document.querySelectorAll(".btns");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (/\d/.test(value)) {
            if (isOperatorClicked) {
                previousOperand = currentOperand;
                currentOperand = "";
                isOperatorClicked = false;
            }
            currentOperand += value;
            display.textContent = currentOperand;
        } else if (value === "=") {
            if (operator && previousOperand !== "") {
                try {
                    currentOperand = eval(`${previousOperand} ${operator} ${currentOperand}`);
                    display.textContent = currentOperand;
                    operator = "";
                } catch (e) {
                    display.textContent = "Error";
                }
            }
        } else if (value === "DEL") {
            currentOperand = currentOperand.slice(0, -1);
            display.textContent = currentOperand || "0";
        } else {
            if (currentOperand !== "") {
                if (previousOperand !== "" && operator) {
                    currentOperand = eval(`${previousOperand} ${operator} ${currentOperand}`);
                    display.textContent = currentOperand;
                }
                operator = value;
                isOperatorClicked = true;
            }
        }
    });
});
