import React, { useEffect, useState } from 'react';
import './ResultModal.css';

const ResultModal = (props) => {

	const [finalTime, setFinalTime] = useState(0);

	const ScoreString = `Your final score is: ${props.score}`;
	const timeString = `Completed in ${finalTime}`

	const onSubmit = (e) => {
		setFinalTime(props.seconds);
		props.setShowResultModal(false);
	}

	return(
		<>

			{props.isOpen && (
				<div className='overlay'>
					<div className='box'>
						<h2>{ScoreString}</h2>
						<h2>{timeString}</h2>
						<button onClick={onSubmit}>Close</button>
					</div>
				</div>
			)}
		</>
	)
}

export default ResultModal;