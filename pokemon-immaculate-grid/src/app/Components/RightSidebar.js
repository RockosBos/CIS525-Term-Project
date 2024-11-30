import React, { useEffect, useState } from 'react';
import {GET} from'../api/route';
import Card from './Card'

const RightSidebar = () => {
	const [pokemonData, setPokemonData] = useState([]);

	useEffect(() => {
		const data = async () => {
			GET().then(result => setPokemonData(result));
		};

		data();

	}, [GET, setPokemonData]);

	return(
		<>
			<div>
				
				{
					pokemonData.map((res) => {
						return(<Card number={res.number} name={res.Pokemon} Image={res.Image} />)
					})
					

				}
			</div>
		</>
	);
}

export default RightSidebar;