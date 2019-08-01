// Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Component Imports
import SpaceDescription from './SpaceDescription';

// Custom Styles
import "../scss/ShowMore.scss";


export default function ShowMoreTab({ imageData }) {
	const [showWindow, setShowWindow] = useState(false);
	const [carrat, setCarrat] = useState(false);

	return(
			<div className="hoverTab" onMouseEnter={() => setShowWindow(true)} onMouseLeave={() => {
				setShowWindow(false)}}>
				<div className="showMore">
					<div className="left">
						{showWindow === false && <h4>Hover for Information</h4>}
						{showWindow && <h4> Mouse Away to Close</h4>}
						{showWindow === false && <i className="material-icons">keyboard_arrow_up</i>}
						{showWindow && <i className="material-icons">keyboard_arrow_down</i>}
					</div>
				</div>
				{showWindow && <SpaceDescription imageData={imageData} />}
			</div>
	)
}


