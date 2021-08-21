import React from "react";
import "./Quiz.css";
const Quiz = () => {
	const array = [
		{
			question:
				"A triangle that has no equal sides and no equal angles is known as",
			options: [
				"isosceles triangle",
				"scalene triangle",
				"equilateral triangle",
			],
			answer: "scalene triangle",
		},
		{
			question:
				"Two angles of a triangle are 30 and 60  degrees respectivaly, find the third angle",
			options: ["90", "60", "120"],
			answer: "90",
		},
		{
			question:
				" In a rectangle Length = 8 cm, Breadth = 6 cm. Then its diagonal =",
			options: ["14", "12", "10"],
			answer: "10",
		},
		{
			question: "The total measure of the three angles of a triangle is",
			options: ["360", "180", "90"],
			answer: "360",
		},
		{
			question: "The measure of each angle of an equilateral triangle is",
			options: ["30", "60", "55"],
			answer: "60",
		},
	];
	const [index, setIndex] = React.useState(0);
	const [score, setScore] = React.useState(0);
	const [savedAnswer, setSavedAnswer] = React.useState("select a option");
	const lastIndex = 5;
	const saveAnswer = () => {
		if (savedAnswer === "select a option") {
			alert("Please select a answer");
		} else {
			if (savedAnswer === array[index].answer) {
				alert("Correct answer");
				setScore((score) => score + 1);
				setIndex((index) => index + 1);
			} else {
				alert("Wrong answer. Correct answer is " + array[index].answer);
				setIndex((index) => index + 1);
			}
		}
		setSavedAnswer("select a option");
	};

	return (
		<div className="root">
			<h1>Test your knowledge Take a quiz on triangles</h1>
			{index === lastIndex ? (
				<div>
					<h4>
						Thanks for taking the quiz <br /> Your score is: {score}
					</h4>
				</div>
			) : (
				<div className="quizContainer">
					<div className="scoreCotainer">Your Score = {score}</div>
					{}
					<div className="questionContainer">
						<label for="cars">{array[index].question}</label>
						<select
							style={{ height: "30px", margin: "20px", fontSize: "20px" }}
							value={savedAnswer}
							onChange={(e) => setSavedAnswer(e.target.value)}
						>
							<option>select a option</option>
							{array[index].options.map((item, index) => (
								<option value={item}>{item}</option>
							))}
						</select>
					</div>

					<button onClick={saveAnswer}>next</button>
				</div>
			)}
		</div>
	);
};

export default Quiz;
