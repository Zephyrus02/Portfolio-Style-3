import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Analytics } from "@vercel/analytics/react";
import { inject } from "@vercel/analytics";

inject();

ReactDOM.render(
	<React.StrictMode>
		<Analytics />
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
