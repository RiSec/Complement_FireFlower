import { useLocation } from "react-router-dom";
import ReductionWidth from "./ChangeWidth";

const ImageReceive = () => {
	const location = useLocation();
	const { imageData } = location.state;
	const { volume } = location.state;
	return (
		<>
			<ReductionWidth
				minTarget={"pic"}
				minWidth={0}
				maxTarget={"rubbish"}
				maxWidth={100}
				volume={volume}
			/>
			{/* <h1>{volume}</h1> */}
			<center>
				<div id="pic" style={{ width: 150, position: "relative" }}>
					<img src={imageData} alt="preview"></img>
				</div>
				<img
					src="/gomi_kamikuzu.png"
					style={{ width: 0, position: "absolute" }}
					id="rubbish"
					alt="rubbish"
				></img>
			</center>

			{/* <center><div id="container" style={{ backgroundColor: "black", width: 500, height: 800 }}></div></center> */}
		</>
	);
};
export default ImageReceive;
