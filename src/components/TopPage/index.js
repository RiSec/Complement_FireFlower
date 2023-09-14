import SlideShow from "./slideshow-hanabi";
import "./style.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopPage = () => {
  const [mypic1, setMyPic1] = useState("/img/hanabi-1.png");

  // var pics_src = new Array("/img/hanabi-1.png", "/img/hanabi-2.png", "/img/hanabi-3.png", "/img/white.png");
  // var num = -1;

  // function slideshow_timer1() {
  //     console.log("slideshow_timer1");
  //     if (num == 3) {
  //         num = 0;
  //     }
  //     else {
  //         num++;
  //     }
  //     //document.getElementById("mypic-1",).src = pics_src[num];
  //     setMyPic1(pics_src[num]);
  //     // setInterval(slideshow_timer1(), 1000);
  //     console.log("slideshow_timer1 did");

  // }

  // /*左側*/
  // var pics_src = new Array("/img-2/hanabi-1.png", "/img-2/hanabi-2.png", "/img-2/hanabi-3.png", "/img-2/white.png");
  // var num_2 = -1;

  // function slideshow_timer2() {
  //     if (num_2 == 3) {
  //         num_2 = 0;
  //     }
  //     else {
  //         num_2++;
  //     }
  //     //document.getElementById("mypic-2",).src = pics_src[num_2];
  //     // setTimeout("slideshow_timer2()", 1000);
  // }
  // slideshow_timer2();

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
        <img
          id="mypic-1"
          class="mypic-1"
          src="/img/hanabi-1.png"
          width="400"
          height="300"
        ></img>
        <img
          id="mypic-2"
          class="mypic-2"
          src="/img-2/hanabi-1.png"
          width="400"
          height="300"
        ></img>
        <header>
          <div class="background"></div>
        </header>

        <main>
          <div class="flex-1">
            <p class="title">鬱 憤 爆 散</p>
          </div>
          <div class="flex-2">
            <p class="attention">
              お使いの端末は非推奨です。フォントが崩れる場合があります。
            </p>
          </div>
        </main>

        <aside>
          <nav>
            <div class="go-explostion" id="wrapper">
              <Link to="/UploadPage">打ち上げる</Link>
            </div>
          </nav>

          <div class="score" id="wrapper">
            <a href="../score/index.html">過去のスコア</a>
          </div>
        </aside>
      </body>
    </>
  );
};

export default TopPage;
