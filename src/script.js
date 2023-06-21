class Calculator {
	constructor(prevOperandTextElement, currentOperandTextElement) {
		this.prevOperandTextElement = prevOperandTextElement;
		this.currentOperandTextElement = currentOperandTextElement;
		this.clear();
	}

	clear() {
		this.previousOperand = "";
		this.currentOperand = "0";
		this.operation = undefined;
	}

	chooseOperation(operation) {
		if (this.currentOperand === "0") return;

		if (this.previousOperand !== "") {
			this.compute();
		}

		if (operation === "=") return;

		this.operation = operation;
		this.previousOperand = this.currentOperand;
		this.currentOperand = "0";
	}

	clearCurrentOperand() {
		this.currentOperand = "0";
	}

	delete() {
		if (this.currentOperand.length === 1) {
			this.currentOperand = "0";
		} else {
			this.currentOperand = this.currentOperand.slice(0, -1);
		}
	}

	compute() {
		let result = 0;
		let previousOperand = parseFloat(this.previousOperand);
		let currentOperand = parseFloat(this.currentOperand);

		switch (this.operation) {
			case "+":
				result = previousOperand + currentOperand;
				break;
			case "-":
				result = previousOperand - currentOperand;
				break;
			case "*":
				result = previousOperand * currentOperand;
				break;
			case "/":
				result = previousOperand / currentOperand;
				break;
			case "^2":
				result = Math.pow(currentOperand, 2);
				break;
			case "^3":
				result = Math.pow(currentOperand, 3);
				break;
			default:
				result = 0;
		}

		this.currentOperand = result;
		this.operation = undefined;
		this.previousOperand = "";
	}

	apppendNumber(number) {
		if (number === "." && this.currentOperand.includes(".")) return;
		if (this.currentOperand.length === 8) return;

		if (this.currentOperand === "0") {
			if (number === ".") {
				this.currentOperand = this.currentOperand + number.toString();
			} else {
				this.currentOperand = number.toString();
			}
		} else {
			this.currentOperand = this.currentOperand.toString() + number.toString();
		}
	}

	getOperationSymobol() {
		const operation = this.operation;

		if (operation === undefined) {
			return "";
		}

		if (operation === "/") {
			return "÷";
		}

		if (operation === "*") {
			return "×";
		}

		return operation;
	}

	updateDisplay() {
		this.currentOperandTextElement.innerText = this.currentOperand;

		this.prevOperandTextElement.innerText = `${this.previousOperand} ${this.getOperationSymobol()}`;
	}
}

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearAllButton = document.querySelector("#clear-all");
const clearCurrentOperandButton = document.querySelector("#clear-current-operand");
const deleteButton = document.querySelector("#delete");

const subDisplay = document.querySelector(".sub-display");
const mainDispaly = document.querySelector(".main-display");

const calculator = new Calculator(subDisplay, mainDispaly);
calculator.updateDisplay();

numberButtons.forEach(numberButton => {
	numberButton.addEventListener("click", e => {
		const number = e.target.innerText;
		calculator.apppendNumber(number);
		calculator.updateDisplay();
	});
});

operatorButtons.forEach(operatorButton => {
	operatorButton.addEventListener("click", e => {
		const operator = e.target.value;
		calculator.chooseOperation(operator);
		calculator.updateDisplay();
	});
});

clearAllButton.addEventListener("click", () => {
	calculator.clear();
	calculator.updateDisplay();
});

clearCurrentOperandButton.addEventListener("click", () => {
	calculator.clearCurrentOperand();
	calculator.updateDisplay();
});

deleteButton.addEventListener("click", () => {
	calculator.delete();
	calculator.updateDisplay();
});
