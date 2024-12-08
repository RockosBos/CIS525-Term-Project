import React, { useEffect, useState } from 'react';
import './ResultModal.css';

const ResultModal = (props) => {

	const onSubmit = (e) => {
		props.setShowResultModal(false);
	}

	return(
		<>

			{props.isOpen && (
				<div className='overlay'>
					<div className='box'>
						<button onClick={onSubmit}>Close</button>
					</div>
				</div>
			)}
		</>
	)
}

export default ResultModal;