import React from 'react';

import "../scss/SpaceBackground.scss";

export default function SpaceBackground({ imageURL }){
	return(
		<div className="SpaceBackground"
		style={{backgroundImage: `url(${imageURL})`}}
		></div>
	)

}