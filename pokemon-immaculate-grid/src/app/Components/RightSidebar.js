import React, { useEffect, useState } from 'react';
import Card from './Card'

import './RightSidebar.css';

const RightSidebar = (props) => {

	return(
		<>
			<div>
				
				{
					props.pokemonData.map((res, i) => {
						return(<Card key={i} id={i} number={res.number} name={res.Pokemon} Image={res.Image} />)
					})
					

				}
			</div>
		</>
	);
}

export default RightSidebar;