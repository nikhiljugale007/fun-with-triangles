import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import TrangleCheck from "./components/TrangleCheck";
import Quiz from "./components/Quiz";
import Area from "./components/Area";
import Hypoteneous from "./components/Hypoteneous";
import {
	FaLinkedinIn,
	FaGithub,
	FaInstagram,
	FaWindowClose,
} from "react-icons/fa";

function App() {
	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<div className="header">
				<div>Fun with Triangles</div>
				<div className="linksContainer">
					<Link className="links" to="/">
						IsTriangle
					</Link>
					<Link className="links" to="/quiz">
						Quiz{" "}
					</Link>
					<Link className="links" to="/hyp">
						Hypotenuse
					</Link>
					<Link className="links" to="/area">
						Area of Triangle
					</Link>
				</div>
			</div>
			<main>
				<Switch>
					<Route path="/" component={TrangleCheck} exact />
					<Route path="/quiz" component={Quiz} exact />
					<Route path="/area" component={Area} exact />
					<Route path="/hyp" component={Hypoteneous} exact />
				</Switch>
			</main>
			<div className="footer">
				<div>
					<p> &copy; | 2021 | nikhiljugale007</p>
					<div style={{ fontSize: "30px" }}>
						<a
							href="https://www.instagram.com/nikhiljugale007/"
							target="_blank"
						>
							<FaInstagram style={{ color: "#fff" }} />{" "}
						</a>
						<a
							href="https://www.linkedin.com/in/nikhiljugale007/"
							target="_blank"
						>
							<FaLinkedinIn style={{ color: "#fff" }} />{" "}
						</a>
						<a href="https://github.com/nikhiljugale007" target="_blank">
							<FaGithub style={{ color: "#fff" }} />{" "}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
