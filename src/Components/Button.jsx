import React from "react";

const Button = ({ value, color = "default", children, onClick }) => {
	return (
		<button
			className={`btn btn-${color}`}
			onClick={e => onClick({ value: e.target.value, text: e.target.innerText })}
			value={value ? value : ""}
		>
			{children}
		</button>
	);
};

export default Button;
