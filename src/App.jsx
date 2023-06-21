import { useState } from "react";
import Display from "./Components/Display";
import { renderButton } from "./utils/renderButton";
import { compute, isNumber, isOperator } from "./utils";
import { BUTTONS } from "./Constants";

const App = () => {
	const [currentOperand, setCurrentOperand] = useState("0");
	const [previousOperand, setPreviousOperand] = useState("");
	const [operator, setOperator] = useState("");

	const handleClick = ({ value, text }) => {
		if (value === "delete") {
			setCurrentOperand(prev => (prev.length <= 1 ? "0" : prev.slice(0, prev.length - 1)));
		}

		if (value === "CE") {
			setCurrentOperand("0");
		}

		if (value === "C") {
			setCurrentOperand("0");
			setOperator("");
			setPreviousOperand("");
		}

		if (isNumber(value)) {
			setCurrentOperand(prev => (prev === "0" ? text : prev + text));
		}

		if (isOperator(value)) {
			if (value !== "^2" && value !== "^3") {
				setOperator(text);
				setPreviousOperand(`${currentOperand} ${text}`);
				setCurrentOperand("0");
			}

			if (previousOperand !== "") {
				const result = compute(previousOperand, currentOperand, operator);
				if (value === "=") {
					setPreviousOperand("");
					return setCurrentOperand(result);
				}
				setPreviousOperand(`${result} ${text}`);
			}

			if (value === "^2") {
				setPreviousOperand("");
				setCurrentOperand(prev => {
					console.log(prev);
					if (!prev) return "";
					const num = parseFloat(prev);
					console.log(num);
					return Math.pow(num, 2);
				});
				setPreviousOperand(`${currentOperand}^2`);
			}

			if (value === "^3") {
				setPreviousOperand("");
				setCurrentOperand(prev => {
					if (!prev) return "";
					const num = parseFloat(prev);
					return Math.pow(num, 3);
				});
				setPreviousOperand(`${currentOperand}^3`);
			}

			if (value === "1/x") {
				setPreviousOperand("");
				setCurrentOperand(prev => {
					if (!prev) return "";
					const num = parseFloat(prev);
					console.log(num);
					return 1 / num;
				});
				setPreviousOperand(`1/${currentOperand}`);
			}
		}

		if (value === ".") {
			if (currentOperand.includes(".")) return;
			setCurrentOperand(prev => prev + text);
		}
	};

	return (
		<div className="calculator">
			<Display sub={previousOperand} main={currentOperand} />
			<div className="btn-container">
				{BUTTONS.map(button => renderButton(button, handleClick))}
			</div>
		</div>
	);
};

export default App;
