import React, { useState } from "react";

//create your first component
const Home = () => {
	const [changeColor, setChangeColor] = useState("")

	return (
		<div className="father">
			<div className="stick"></div>
			<div className="traffic-light">
				<div
					onClick={() => setChangeColor("red")}
					className={"light red" + (changeColor === "red" ? " shine-red" : "")}>
				</div>
				<div
					onClick={() => setChangeColor("yellow")}
					className={"light yellow" + (changeColor === "yellow" ? " shine-yellow" : "")}>
				</div>
				<div
					onClick={() => setChangeColor("green")}
					className={"light green" + (changeColor === "green" ? " shine-green" : "")}>
				</div>
			</div>
		</div>
	);
};

export default Home;