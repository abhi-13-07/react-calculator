export const isNumber = s => {
	if (s.charCodeAt(0) >= 48 && s.charCodeAt(0) <= 57) return true;
	return false;
};

export const isOperator = s => {
	const operators = ["1/x", "/", "^2", "^3", "+", "=", "-", "*", "-"];
	return operators.includes(s);
};

export const compute = (prev, curr, operator) => {
	switch (operator) {
		case "+":
			return parseFloat(prev) + parseFloat(curr);
		case "-":
			return parseFloat(prev) - parseFloat(curr);
		case "×":
			return parseFloat(prev) * parseFloat(curr);
		case "÷":
			return parseFloat(prev) / parseFloat(curr);
	}
};
