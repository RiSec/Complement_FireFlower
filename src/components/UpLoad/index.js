import React from "react";
import { Link } from "react-router-dom";
import styles from "./UpLoad.module.css";

export default class UpLoad extends React.Component {
	//inputで選択された画像データを受け取る

	constructor(props) {
		super(props);
		this.state = {
			imageData: null,
		};
	}

	onFileChange(e) {
		const files = e.target.files;
		if (files.length > 0) {
			var file = files[0];
			var reader = new FileReader();
			reader.onload = (e) => {
				this.setState({ imageData: e.target.result });
			};
			reader.readAsDataURL(file);
		} else {
			this.setState({ imageData: null });
		}
	}

	render() {
		//画像
		const imageData = this.state.imageData;

		let preview = "";

		if (imageData != null) {
			preview = <img src={imageData} alt="preview" />;
		}

		return (
			<>
				<head>
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
				</head>

				<body>
					<header>
						<div class={styles.background2}></div>
					</header>

					<div class={styles.maintext}>
						<div class={styles.text1}>
							<p class={styles.linethrough}>大嫌いなあいつの</p>
							<p>写真を選ぼう！</p>
						</div>

						<div class={styles.text2}>
							<label class={styles.fileUploadBtn} tabindex="0">
								<input
									type="file"
									accept="image/*"
									className={styles.file}
									onChange={(e) => {
										this.onFileChange(e);
									}}
								/>
								写真を選択する
							</label>
							{/* <p id="button">写真を選択する</p> */}
						</div>
					</div>

					<section>
						<div class={styles.button}>
							<Link to="/">
								<p class={styles.button_top}>戻る</p>
							</Link>

							<Link to="/AudioPage" state={{ imageData: imageData }}>
								<p class={styles.button_top}>決定</p>
							</Link>
						</div>
					</section>
					{/* <aside>
						<div class="home">
							<a href="../index.html">
								<img src="/img/home.png" alt="home"></img>
							</a>
						</div>
						<div class="ranking">
							<a href="../index.html">
								<img src="/img/ranking.png" alt="ranking"></img>
							</a>
						</div>
					</aside> */}
					{preview}
				</body>
				{/* <div style={{ backgroundColor: "rgb(13, 13, 96)", height: 1000 }}>
					<input
						type="file"
						accept="image/*"
						onChange={(e) => {
							this.onFileChange(e);
						}}
					/>
					<div id="pic" style={{ width: 150 }}>
						{preview}
					</div>

					<center>
						<div class="go-explostion" id="wrapper">
							<Link to="/AudioPage" state={{ imageData: imageData }}>
								決定
							</Link>
						</div>
					</center>
				</div> */}
			</>
		);
	}
}
