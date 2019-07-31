// Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Local Imports
import SpaceDescription from './SpaceDescription';
import SpaceBackground from './SpaceBackground';



export default function SpaceHolder() {
	const [spaceImage, setSpaceImage] = useState([]);
	const [imageData, setImageData] = useState([]);
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
			<SpaceDescription imageData={imageData}/>
		</div>
	)




}