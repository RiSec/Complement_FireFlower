import { useNavigate } from "react-router-dom";

export default function ReductionWidth({
	minTarget,
	minWidth,
	maxTarget,
	maxWidth,
	volume,
}) {
	const navigate = new useNavigate();
	// ボタンを無効化
	// alert("ReductionWidth");
	setTimeout(function () {
		console.log("a");
		// 1ミリ秒ごとに「changeWidth()」関数を呼び出す繰り返しタイマー
		var ReduceintervalID = setInterval(function () {
			minChangeWidth();
		}, 1);

		// 1ミリ秒ごとに呼び出される関数
		function minChangeWidth() {
			var targetElement = document.getElementById(minTarget);

			// 現在の幅を取得し、変数「$width」に格納
			var width = targetElement.style.width;

			// 変数「$width」から「px」を取り除き、整数に変換
			width = parseInt(width.replace("px", ""));

			if (width > minWidth) {
				targetElement.style.width = --width + "px";
			} else {
				clearInterval(ReduceintervalID);
				maxChangeWidth();
			}
		}

		function maxChangeWidth() {
			var ExpentionIntervalID = setInterval(function () {
				var targetElement = document.getElementById(maxTarget);

				// 現在の幅を取得し、変数「$width」に格納
				var width = targetElement.style.width;

				// 変数「$width」から「px」を取り除き、整数に変換
				width = parseInt(width.replace("px", ""));

				if (width < maxWidth) {
					targetElement.style.width = ++width + "px";
				} else {
					// 繰り返しタイマーを中止

					clearInterval(ExpentionIntervalID);
					console.log("aa");
					// alert("end");
					down();

					setTimeout(function () {
						navigate("/UploadPage/ImageRecievege/FireworksPage", {
							state: { volume: { volume } },
						});
					}, 4000);
					//  fire();
				}
			}, 1);
		}

		function down() {
			console.log("down");
			const image = document.getElementById(maxTarget);

			image.animate(
				// 途中の状態を表す配列
				[
					{ transform: "translateY(0)" }, // 開始時の状態（上部）
					{ transform: "translateY(1000px)" }, // 終了時の状態（上部から100px下の位置）
				],
				// タイミングに関する設定
				{
					fill: "forwards",
					duration: 2000, // 再生時間（500ミリ秒）
				}
			);
		}

		// //fruction
		// function fire() {
		//     const options = {

		//         traceLength: 10.00,
		//         traceSpeed: 1,
		//         acceleration: 1,
		//         rocketsPoint: {
		//             min: 50,
		//             max: 50
		//         },

		//     }
		//     console.log("diss");
		//     const container = document.getElementById('container');
		//     const fireworks = new Fireworks(container, options);
		//     fireworks.launch(1);

		// }
	}, 4000);
}
