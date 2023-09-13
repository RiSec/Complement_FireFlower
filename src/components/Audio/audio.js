import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";



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
    // オーディオストリームの生成
    audioContext = new (window.AudioContext || window.webkitAudioContext)();

    // 音声入力の開始
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        // メディアストリームソースとメーターの生成
        mediaStreamSource = audioContext.createMediaStreamSource(stream);
        meter = createAudioMeter(audioContext);
        mediaStreamSource.connect(meter);
        console.log("sss");
      });
    }
  }


  return (
    <div>
      <button onClick={beginDetect}>ボリューム検出の開始</button>
      <div class="go-explostion" id="wrapper"><Link to="/UploadPage/ImageRecievege" state={{ imageData: imageData, volume: Math.floor(volume * Math.pow(10, 2)) / Math.pow(10, 2) }}>終了</Link></div>
      <p>ボリューム: {volume.toFixed(2)}</p>

      {/* <img src={imageData}></img> */}
    </div>
  );
};
export default Audio;
