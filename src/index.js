// React Imports
import React, { useState } from "react";
import ReactDOM from "react-dom";

// Local Imports
import "./index.scss";
import "../src/scss/SpaceDescription.scss";
import "../src/scss/SpaceBackground.scss";

function App() {
	return (
	  <div className="App">
		 <p>
			Read through the instructions in the README.md file to build your NASA
			app! Have fun 🚀!
		 </p>
		
	  </div>
	);
 }

ReactDOM.render(<App />, document.getElementById("root"));
