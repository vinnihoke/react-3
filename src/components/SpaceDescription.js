import React from 'react';

export default function SpaceDescription({ imageData }){
	return(
		<div className="hoverWindow">
			<div className="closeWindow"><span>CLOSE</span></div>
			<h3 className="title">{imageData.title.toUpperCase()}</h3>
			<h4 className="information"><span>{imageData.copyright.toUpperCase()}</span> '|' <span>{imageData.date}</span></h4>
			<p className="explanation">{imageData.explanation}</p>
		</div>
	)
}