import React, { useEffect, useState } from 'react';
import Card from './Card'

const RightSidebar = (props) => {

	return(
		<>
			<div>
				
				{
					props.pokemonData.map((res) => {
						return(<Card number={res.number} name={res.Pokemon} Image={res.Image} />)
					})
					

				}
			</div>
		</>
	);
}

export default RightSidebar;