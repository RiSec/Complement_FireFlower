import Fireworks from "fireworks-js";
import { useLocation } from "react-router-dom";

const FireworksPage = () => {
	const navigate = Navigator();
	const location = useLocation();
	const { volume } = location.state;
	console.log(volume.volume);

	const options = {
		//減衰の大きさ
		//decay:
		//閃光
		friction: volume.volume + 0.8,
		//咲
		particles: 200,
		//線の長さ
		traceLength: 10.0,
		traceSpeed: 2,
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
			files: ["sound2.mp3"],
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
	}, 4000);

	setTimeout(function () {
		navigate("/UploadPage/ImageRecievege/FireworksPage/Score", {
			state: { volume: { volume } },
		});
	}, 4000);

	return (
		<>
			<center>
				<div
					id="container"
					style={{ backgroundColor: "black", width: 500, height: 800 }}
				></div>
			</center>
		</>
	);
};
export default FireworksPage;
