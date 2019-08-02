// Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Material UI 

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';


// Component Imports
import SpaceDescription from './SpaceDescription';

// Custom Styles
import "../scss/ShowMore.scss";

const useStyles = makeStyles({
	list: {
	  width: 400,
	  display: 'flex',
	  flexDirection: 'column',
	  justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
		backgroundColor: '#070133',
		transition: '300ms',
		color: 'white'
	},
	// largeButton: {

	// }
 });

export default function ShowMore({ imageData }) {

	// Drawer Styles
	const classes = useStyles();
	const [state, setState] = useState({right: false});
	
	const toggleDrawer = (side, open) => event => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
		  return;
		}
  
		setState({ ...state, [side]: open });
	 };

	 const sideList = side => (
		<div
		  className={classes.list}
		  role="presentation"
		  onClick={toggleDrawer(side, false)}
		  onKeyDown={toggleDrawer(side, false)}
		>
		<SpaceDescription imageData={imageData} />
		</div>
		);

	return(
			// <div className="hoverTab" onMouseEnter={() => setShowWindow(true)} onMouseLeave={() => {
			// 	setShowWindow(false)}}>
			// 	<div className="showMore">
			// 		<div className="left">
			// 			{showWindow === false && <h4>Hover for Information</h4>}
			// 			{showWindow && <h4> Mouse Away to Close</h4>}
						
			// 			{showWindow === false && <Icon>keyboard_arrow_up</Icon>}
			// 			{showWindow && <Icon>keyboard_arrow_down</Icon>}
			// 		</div>
			// 	</div>
			// 	{showWindow && <SpaceDescription imageData={imageData} />}
			// </div>
			<>
				<Button className="informationFAB" onClick={toggleDrawer('right', true)}><Icon className="iconFAB">information</Icon></Button>

				<Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
				{sideList('right')}
				</Drawer>
			</>
	)
}


