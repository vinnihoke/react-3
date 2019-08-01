import React from 'react';

export default function SpaceDescription({ imageData }){
	return(
		<div className="hoverWindow">
			<h3 className="title">{imageData.title}</h3>
			<h4 className="information"><span>{imageData.copyright}</span> | <span>{imageData.date}</span></h4>
			<p className="explanation">{imageData.explanation}</p>
		</div>
	)
}