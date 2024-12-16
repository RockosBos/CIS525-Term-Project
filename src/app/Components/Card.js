import React, { Component, useState } from 'react';
import "./Header.css";
import Image from 'next/image';
import "./Card.css";

const Card = (props) => {
	
	const imageString = `/pokemon/${props.number}_${props.name}.png`

	return(
		<>
			<div className='Card' id={props.id} key={props.id}>
				<div className='CardHeader'>
					<strong>{props.number} {props.name}</strong>
				</div>
				<div className='CardImage'>
					<Image src={imageString} alt='Pokemon Image' width={100} height={100}/>
				</div>
				<div className='CardData'>

				</div>
			</div>
		</>
	)
}

export default Card;