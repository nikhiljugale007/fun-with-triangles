import React from "react";
import "./Area.css";
import twoSideArea from "./twoside.png";
import threeSideArea from "./3sides.png";
const Area = () => {
	const [method, setMethod] = React.useState("twoside");
	const [firstSide, setFirstSide] = React.useState();
	const [secondSide, setSecondSide] = React.useState();
	const [thirdSide, setThirdSide] = React.useState();
	const [area, setArea] = React.useState(0);

	const calculateArea = () => {
		if (method === "twoside") {
			if (firstSide === undefined || secondSide === undefined) {
				alert("Please enter all required feilds");
				return;
			}
			var tempArea = 0.5 * firstSide * secondSide;
			setArea(tempArea);
		} else {
			if (
				firstSide === undefined ||
				secondSide === undefined ||
				thirdSide === undefined
			) {
				alert("Please enter all required feilds");
				return;
			}

			if (
				firstSide + secondSide > thirdSide &&
				secondSide + thirdSide > firstSide &&
				firstSide + thirdSide > secondSide
			) {
				var s =
					(Number(firstSide) + Number(secondSide) + Number(thirdSide)) / 2;
				var tempArea = s * (s - firstSide) * (s - secondSide) * (s - thirdSide);
				setArea(Math.sqrt(tempArea));
			} else {
				alert("These sides do not form a triangle");
			}
		}
	};

	return (
		<div className="root">
			<h1>Calculate Area of a triangle</h1>
			<label>Choose input feilds</label>

			<select
				className="selectContainer"
				onChange={(e) => setMethod(e.target.value)}
			>
				<option value="twoside">Base and Height</option>
				<option value="threeside">Three sides</option>
			</select>
			{method === "twoside" ? (
				<div>
					<div>
						<h4>Enter base of triangle</h4>
						<input
							type="number"
							value={firstSide}
							onChange={(e) => setFirstSide(e.target.value)}
						/>
						<h4>Enter height of triangle</h4>
						<input
							type="number"
							value={secondSide}
							onChange={(e) => setSecondSide(e.target.value)}
						/>
					</div>
				</div>
			) : (
				<div style={{ justifyContent: "center", alignItem: "center" }}>
					<h4>Enter first side of triangle</h4>
					<input
						type="number"
						value={firstSide}
						onChange={(e) => setFirstSide(e.target.value)}
					/>
					<h4>Enter second side of triangle</h4>
					<input
						type="number"
						value={secondSide}
						onChange={(e) => setSecondSide(e.target.value)}
					/>
					<h4>Enter third side of triangle</h4>
					<input
						type="number"
						valur={thirdSide}
						onChange={(e) => setThirdSide(e.target.value)}
					/>
				</div>
			)}
			<button onClick={calculateArea}>Calculate</button>
			<div className="answer">Area of a triangle is = {area} units</div>
			<div className="imageContainer">
				Formula used =
				<img
					src={method === "twoside" ? twoSideArea : threeSideArea}
					alt="logo"
				/>
			</div>
		</div>
	);
};

export default Area;
