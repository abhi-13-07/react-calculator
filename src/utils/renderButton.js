import Button from "../Components/Button";

export const renderButton = (button, handleClick) => {
	if (button.startsWith("^"))
		return (
			<Button key={button} value={button} onClick={handleClick}>
				𝑥<sup>{button[1]}</sup>
			</Button>
		);
	if (button === "/")
		return (
			<Button key={button} onClick={handleClick} value={button}>
				÷
			</Button>
		);
	if (button === "*")
		return (
			<Button key={button} onClick={handleClick} value={button}>
				×
			</Button>
		);
	if (button === "delete")
		return (
			<Button key={button} onClick={handleClick} value={button}>
				<i className="fas fa-backspace"></i>
			</Button>
		);
	if (button.length <= 1 && button.charCodeAt(0) >= 48 && button.charCodeAt(0) <= 57) {
		return (
			<Button key={button} onClick={handleClick} color="white" value={button}>
				{button}
			</Button>
		);
	}

	if (button === "=")
		return (
			<Button key={button} onClick={handleClick} color="primary" value={button}>
				{button}
			</Button>
		);
	return (
		<Button key={button} onClick={handleClick} value={button}>
			{button}
		</Button>
	);
};
