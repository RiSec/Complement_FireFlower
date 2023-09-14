import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Audio.module.css";

const Audio = () => {
	const location = useLocation();
	const { imageData } = location.state;

	const [volume, setVolume] = useState(0);
	// 変数
	var audioContext;
	var mediaStreamSource;
	var meter;
	var maxi = 0;

	// メーターの生成
	function createAudioMeter(audioContext, clipLevel, averaging, clipLag) {
		// メーターの生成
		const processor = audioContext.createScriptProcessor(512);
		processor.onaudioprocess = volumeAudioProcess;
		processor.clipping = false;
		processor.lastClip = 0;
		processor.volume = 0;
		processor.clipLevel = clipLevel || 0.98;
		processor.averaging = averaging || 0.95;
		processor.clipLag = clipLag || 750;
		processor.connect(audioContext.destination);

		// クリップチェック時に呼ばれる
		processor.checkClipping = function () {
			if (!this.clipping) {
				return false;
			}
			if (this.lastClip + this.clipLag < window.performance.now()) {
				this.clipping = false;
			}
			return this.clipping;
		};

		// シャットダウン時に呼ばれる
		processor.shutdown = function () {
			this.disconnect();
			this.onaudioprocess = null;
		};

		return processor;
	}

	// オーディオ処理時に呼ばれる
	function volumeAudioProcess(event) {
		const buf = event.inputBuffer.getChannelData(0);
		const bufLength = buf.length;
		let sum = 0;
		let x;

		// 平均ボリュームの計算
		for (var i = 0; i < bufLength; i++) {
			x = buf[i];
			if (Math.abs(x) >= this.clipLevel) {
				this.clipping = true;
				this.lastClip = window.performance.now();
			}
			sum += x * x;
		}
		const rms = Math.sqrt(sum / bufLength);
		this.volume = Math.max(rms, this.volume * this.averaging);

		maxi = Math.max(this.volume, maxi);
		setVolume(maxi);
		//setVolume(this.volume);

		// ボリュームの表示
		// output.innerHTML = "ボリューム: " + this.volume.toFixed(4);
	}

	// ボリューム検出の開始
	function beginDetect() {
		// 色の変更
		const Button = document.getElementById("but");
		Button.style.backgroundColor = "red";
		// オーディオストリームの生成
		audioContext = new (window.AudioContext || window.webkitAudioContext)();
		// 音声入力の開始
		if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
			navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
				// const mediaStream = navigator.mediaDevices.getUserMedia({ audio: true });
				// mediaStream.then((stream) => {
				// メディアストリームソースとメーターの生成
				mediaStreamSource = audioContext.createMediaStreamSource(stream);
				meter = createAudioMeter(audioContext);
				mediaStreamSource.connect(meter);
				console.log("sss");
			});
		}
	}

	return (
		/*<head>
			<meta charset="UTF-8"></meta>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			></meta>

			<link rel="stylesheet" type="text/css" href="style.css"></link>
			<meta name="viewport" content="width=device-width"></meta>
			<title>Document</title>

			<link rel="preconnect" href="https://fonts.googleapis.com"></link>
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossorigin
			></link>
			<link
				href="https://fonts.googleapis.com/css2?family=Chokokutai&family=Reggae+One&display=swap"
				rel="stylesheet"
			></link>
		</head>*/

		/*<div>*/
		<div>
			<head>
				<meta charset="UTF-8"></meta>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				></meta>

				<meta name="viewport" content="width=device-width"></meta>
				{/* <!--googlefonts--> */}
				<link rel="preconnect" href="https://fonts.googleapis.com"></link>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossorigin
				></link>
				<link
					href="https://fonts.googleapis.com/css2?family=Chokokutai&family=Reggae+One&family=Yuji+Hentaigana+Akebono&display=swap"
					rel="stylesheet"
				></link>

				<link rel="preconnect" href="https://fonts.googleapis.com"></link>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossorigin
				></link>
				<link
					href="https://fonts.googleapis.com/css2?family=Chokokutai&family=Reggae+One&display=swap"
					rel="stylesheet"
				></link>
				<title>uppun bakuhatu</title>
			</head>

			<body>
				<header>
					<div class={styles.background}></div>
				</header>

				<section>
					<div class={styles.button}>
						<Link to="/UploadPage">
							<p class={styles.button_top}>戻る</p>
						</Link>
					</div>
				</section>

				<div class={styles.shout}>
					<p>叫べ！</p>
				</div>
				<div class={styles.voice}></div>
				<div class={styles.REC} onClick={beginDetect}>
					<div class={styles.text}>REC</div>
					<div id={styles.box} class={styles.color}>
						<button id="but"></button>
					</div>
				</div>
				<div class={styles.wrapper}>
					<Link
						to="/UploadPage/ImageRecievege"
						state={{
							imageData: imageData,
							volume: Math.floor(volume * Math.pow(10, 2)) / Math.pow(10, 2),
						}}
					>
						終了
					</Link>
				</div>
				<div class={styles.volumevalue}>
					<p>ボリューム: {volume.toFixed(2) * 200} 点</p>
				</div>
				{/* <button onClick={""}>stop</button> */}
			</body>
			{/* <button onClick={beginDetect}>ボリューム検出の開始</button> */}

			{/* <img src={imageData}></img> */}
		</div>
	);
};
export default Audio;
