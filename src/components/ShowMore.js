// Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Component Imports
import SpaceDescription from './SpaceDescription';

// Custom Styles
import "../scss/ShowMore.scss";


export default function ShowMoreTab({ imageData }) { 
	const [showWindow, setShowWindow] = useState(false);

	const carrat = document.querySelector(".carrat");

	const carratToggle = () => {
		if(showWindow === true && carrat.textContent === "keyboard_arrow_up") carrat.textContent = "keyboard_arrow_down";
	}

	return(
			<div className="hoverTab" onMouseEnter={() => setShowWindow(true)} onMouseLeave={() => {
				setShowWindow(false)}}>
				<div className="showMore">
					<div className="left">
						<h4>Show More</h4>
						<i className="material-icons carrat">keyboard_arrow_up</i>
					</div>
				</div>
				{showWindow && <SpaceDescription imageData={imageData} />}
			</div>
	)
}


