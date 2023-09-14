import styles from "./TopPage.module.css";
import { Link } from "react-router-dom";

const TopPage = () => {
	return (
		<>
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

				<div class={styles.main}>
					<div class={styles.flex1}>
						<p class={styles.title}>鬱 憤 爆 散</p>
					</div>
					<div class={styles.flex2}>
						<p class={styles.attention}>
							お使いの端末は非推奨です。フォントが崩れる場合があります。
						</p>
					</div>
				</div>

				<aside>
					<nav className={styles.nav_menu}>
						<div className={`${styles.wrapper} ${styles.score}`}>
							<Link to="/UploadPage">
								<p className={styles.utiage_p}>打ち上げる</p>
							</Link>
						</div>
					</nav>
				</aside>
			</body>
		</>
	);
};

export default TopPage;

/*<div className={styles.button_to_}>*/
/*<div className={`${styles.wrapper} ${styles.score}`}>*/
