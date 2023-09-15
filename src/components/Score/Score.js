import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Score.module.css";

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

/*const uploadTime = onFileChange(e);

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
      <Link to="/">
        <p class={styles.button_top}>戻る</p>
      </Link>
      <div class="bestScore">ベストスコア</div>
      <ul id="photoList"></ul>
      <div id="topRanks"></div>
    </body>
  </>
);
*/
