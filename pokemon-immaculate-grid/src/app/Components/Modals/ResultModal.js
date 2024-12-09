import React, { useEffect, useState } from 'react';
import './ResultModal.css';

const ResultModal = (props) => {

	const [finalTimeString, setFinalTimeString] = useState('');

	const ScoreString = `Your final score is: ${props.score}`;

	const onSubmit = (e) => {
		props.setShowResultModal(false);
	}

	useEffect(() => {
		setFinalTimeString(`Completed in ${props.seconds} seconds`);
	},[props.guesses]);

	return(
		<>

			{props.isOpen && (
				<div className='overlay'>
					<div className='box'>
						<h2>{ScoreString}</h2>
						<h2>{finalTimeString}</h2>
						<button onClick={onSubmit}>Close</button>
					</div>
				</div>
			)}
		</>
	)
}

export default ResultModal;