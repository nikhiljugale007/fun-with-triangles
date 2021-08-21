import React from "react";

const TrangleCheck = () => {
	const [firstAngle, setFirstAngle] = React.useState();
	const [secondAngle, setSecondAngle] = React.useState();
	const [thirdAngle, setThirdAngle] = React.useState();
	const [message, setMessage] = React.useState();

	const checkTriangle = () => {
		if (
			firstAngle === undefined ||
			secondAngle === undefined ||
			thirdAngle === undefined
		) {
			setMessage("Please enter all Angles");
		} else {
			if (
				Number(firstAngle) + Number(secondAngle) + Number(thirdAngle) ===
				180
			) {
				setMessage("Congratulation, Given angles form a triangle");
			} else {
				setMessage("Given angles doesn't form a triangle");
			}
		}
	};
	return (
		<div className="root">
			<h1>Angles of triangle</h1>
			Enter three angles of and check weather they form a triangle
			<h4>Angle 1</h4>
			<input
				type="number"
				value={firstAngle}
				onChange={(e) => setFirstAngle(e.target.value)}
			/>
			<h4>Angle 2</h4>
			<input
				type="number"
				value={secondAngle}
				onChange={(e) => setSecondAngle(e.target.value)}
			/>
			<h4>Angle 3</h4>
			<input
				type="number"
				value={thirdAngle}
				onChange={(e) => setThirdAngle(e.target.value)}
			/>
			<button onClick={checkTriangle}>Is a triangle?</button>
			<h4>{message}</h4>
		</div>
	);
};

export default TrangleCheck;
