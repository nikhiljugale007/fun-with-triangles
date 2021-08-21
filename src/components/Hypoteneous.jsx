import React from "react";
import "./Hypoteneous.css";
const Hypoteneous = () => {
	const [base, setBase] = React.useState();
	const [height, setHeight] = React.useState();
	const [hyp, setHyp] = React.useState();
	const calculateHypotenuse = () => {
		if (base === undefined || height === undefined) {
			alert("Please enter all feilds");
			return;
		}
		setHyp(Math.sqrt(base * base + height * height));
	};
	return (
		<div className="root">
			<h1>Calculate Hypotenuse of a triangle</h1>
			<h4>Enter base of triangle</h4>
			<input
				type="number"
				value={base}
				onChange={(e) => setBase(e.target.value)}
			/>
			<h4>Enter height of triangle</h4>
			<input
				type="number"
				value={height}
				onChange={(e) => setHeight(e.target.value)}
			/>
			<button onClick={calculateHypotenuse}>Calculate Hypotenuse</button>
			<h4>Hypotenuse = {hyp} </h4>
			<h4>Hypotenuse formula √(base² + height²)</h4>
		</div>
	);
};

export default Hypoteneous;
