import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopPage from "./components/TopPage";
import Audio from "./components/Audio/audio";
import ImageReceive from "./components/UpLoad/ImageReceive";
import FireworksPage from "./components/UpLoad/FireworksPage";
import UpLoad from "./components/UpLoad";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<App />
		<Routes>
			<Route path={`/`} element={<TopPage />} />
			<Route path="/UploadPage" element={<UpLoad />} />
			<Route path="/AudioPage" element={<Audio />} />
			<Route path="/UploadPage/ImageRecievege" element={<ImageReceive />} />
			<Route
				path="/UploadPage/ImageRecievege/FireworksPage"
				element={<FireworksPage />}
			/>
		</Routes>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
