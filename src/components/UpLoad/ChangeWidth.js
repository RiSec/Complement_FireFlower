import { useNavigate } from "react-router-dom";

export default function ReductionWidth({
	minTarget,
	minWidth,
	maxTarget,
	maxWidth,
	volume,
}) {
	const navigate = new useNavigate();
	var up = false;
	// ボタンを無効化
	setTimeout(function () {
		console.log("a");
		// 1ミリ秒ごとに「changeWidth()」関数を呼び出す繰り返しタイマー
		var ReduceintervalID = setInterval(function () {
			minChangeWidth();
		}, 500);

		// 1ミリ秒ごとに呼び出される関数
		function minChangeWidth() {
			var targetElement = document.getElementById(minTarget);

			// 現在の幅を取得し、変数「$width」に格納
			var width = targetElement.style.width;

			// 変数「$width」から「px」を取り除き、整数に変換
			width = parseInt(width.replace("px", ""));

			if (width > minWidth) {
				if (up === false) {
					targetElement.style.width = -50 + width + "px";
					up = true;
				} else {
					targetElement.style.width = 10 + width + "px";
					up = false;
				}
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

					down();

					setTimeout(function () {
						navigate("/UploadPage/ImageRecievege/FireworksPage", {
							state: { volume: { volume } },
						});
					}, 1000);
					//  fire();
				}
			}, 20);
		}

		function down() {
			console.log("down");
			const image = document.getElementById(maxTarget);

			image.animate(
				// 途中の状態を表す配列
				[
					{ transform: "translateY(0)" }, // 開始時の状態（上部）
					{ transform: "translateY(800px)" }, // 終了時の状態（上部から100px下の位置）
				],
				// タイミングに関する設定
				{
					fill: "forwards",
					duration: 1000, // 再生時間（500ミリ秒）
				}
			);
		}
	}, 1000);
}
