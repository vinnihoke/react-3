// All styles for parent component will be housed on Index.js

// Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Local Imports
import SpaceDescription from './SpaceDescription';
import SpaceBackground from './SpaceBackground';



export default function SpaceHolder() {
	const [spaceImage, setSpaceImage] = useState();
	const [imageData, setImageData] = useState();
	const [loading, setLoading] = useState(false);

	// Axios Call
	useEffect(() => {
		setLoading(true);
		axios
			.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
			.then(results => {
				setSpaceImage(results.url);
				setImageData(results);
				setLoading(false);
			})
			.catch(err => {
				console.log(err);
				setLoading(false);
			})
	}, []);

	return(
		<div className="SpaceHolder">
			{loading && <h2>Loading Images</h2>}
			<SpaceBackground imageURL={spaceImage}/>
			<div className="hoverTab">
				<div className="showMore">
					<h4>Show More</h4>
					<i className="material-icons">keyboard_arrow_up</i>
				</div>
				<SpaceDescription imageData={imageData}/>
			</div>
		</div>
	)




}