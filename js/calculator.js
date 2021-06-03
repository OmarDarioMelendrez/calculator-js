class Calculator {
	constructor(screenElement) {
		this.operand = "0";
		this.screen = screenElement;
	}

	reset() {
		this.operand = "0";
	}
	del() {
		if (this.operand.length > 1) {
			this.operand = this.operand.slice(0, -1);
		} else {
            this.operand = "0";
        }
	}

	addNumber(number) {
		if (number === "." && this.operand.includes(".")) return;
		if (this.operand === "0") this.operand = "";
		this.operand = this.operand.toString() + number.toString();
	}
    addOperation(operator) {
		if (this.operand === "0") return
		this.operand = this.operand.toString() + " " + operator.toString() + " ";
	}
	updateDisplay() {
		this.screen.innerText = this.operand;
	}

    calculate(){
		if (this.operand === "0" || this.operand === "") return this.operand = "0"
        let [num1, operation, num2] = this.operand.split(" ");
		if (!operation || !num2) return this.operand = `${num1}`
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        const typeOperation = {
            "+" :  num1 + num2, 
            "-" :  num1 - num2, 
            "/" :  num1 / num2, 
            "x" :  num1 * num2, 
        }
        this.operand = `${typeOperation[operation]}`;
    }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const deleteButton = document.querySelector("[data-del]");
const equalButton = document.querySelector("[data-equal]");
const resetButton = document.querySelector("[data-reset]");
const screen = document.querySelector("#operand");

let calculadora = new Calculator(screen);

numberButtons.forEach((button) => {
	button.addEventListener("click", () => {
		calculadora.addNumber(button.innerText);
		calculadora.updateDisplay();
	});
});

operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculadora.addOperation(button.innerText);
        calculadora.updateDisplay();
    })
})

resetButton.addEventListener("click", () => {
	calculadora.reset();
	calculadora.updateDisplay();
});

deleteButton.addEventListener("click", () => {
	calculadora.del();
	calculadora.updateDisplay();
});


equalButton.addEventListener("click", () => {
    calculadora.calculate();
    calculadora.updateDisplay();
})