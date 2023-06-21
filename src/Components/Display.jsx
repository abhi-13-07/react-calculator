import React from "react";

const Display = ({ sub, main }) => {
	return (
		<div className="display">
			<div className="sub-display">{sub}</div>
			<div className="main-display">{main}</div>
		</div>
	);
};

export default Display;
