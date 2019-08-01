// React Imports
import React, { useState } from "react";
import ReactDOM from "react-dom";

// Local Imports
import SpaceHolder from "./components/SpaceHolder"
import "./index.scss";
import "../src/scss/SpaceDescription.scss";


function App() {
	return (
	  <div className="App">
		<SpaceHolder/>
	  </div>
	);
 }

ReactDOM.render(<App />, document.getElementById("root"));
