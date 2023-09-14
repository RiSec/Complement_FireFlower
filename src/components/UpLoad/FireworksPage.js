import Fireworks from "fireworks-js";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Fireworks.module.css";

const FireworksPage = () => {
	const navigate = new useNavigate();
	const location = useLocation();
	const { volume } = location.state;
	console.log(volume.volume);

	const options = {
		//減衰の大きさ
		//閃光
		friction: volume.volume * 2.5,
		//咲
		particles: 200,
		//線の長さ
		traceLength: 10.0,
		traceSpeed: 6,
		//線の太さ
		lineWidth: {
			explosion: {
				min: 5,
				max: 5,
			},
			trace: {
				min: 5,
				max: 5,
			},
		},
		acceleration: 1,
		sound: {
			enabled: false,
			files: ["sound01.mp3"],
			volume: {
				min: 60,
				max: 80,
			},
		},
	};
	function fire() {
		console.log(volume);
		const container = document.getElementById("container");
		const fireworks = new Fireworks(container, options);

		fireworks.launch(1);
	}

	setTimeout(function () {
		fire();
	}, 500);

	setTimeout(function () {
		navigate("/");
	}, 7000);

	return (
		<>
			<div className={styles.background}>
				<center>
					<div id="container" style={{ height: "100vh" }}></div>
				</center>
			</div>
		</>
	);
};
export default FireworksPage;
