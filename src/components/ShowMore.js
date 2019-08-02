// Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Icon from '@material-ui/core/Icon'


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
						
						{showWindow === false && <Icon>keyboard_arrow_up</Icon>}
						{showWindow && <Icon>keyboard_arrow_down</Icon>}
					</div>
				</div>
				{showWindow && <SpaceDescription imageData={imageData} />}
			</div>
	)
}

// Material UI 

// import { makeStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';

// https://material-ui.com/components/drawers/
