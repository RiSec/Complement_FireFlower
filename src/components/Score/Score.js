import { useLocation } from "react-router-dom";

const Score = () => {
	const location = useLocation();
	const { volume } = location.state;

	return (
		<>
			<h1>{volume.volume * 10}点</h1>
		</>
	);
};

export default Score;
