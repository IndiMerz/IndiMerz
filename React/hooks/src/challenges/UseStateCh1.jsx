import React, { useState } from 'react';

export const UseStateCh1 = () => {
	const currTime = new Date().toLocaleTimeString();
	const [time, setTime] = useState(currTime);

	const getTime = () => {
		setInterval(() => {
			const updateTime = new Date().toLocaleTimeString();
			setTime(updateTime);
		}, 1000);
	};

	return (
		<div>
			<h1>{time}</h1>
			<button onClick={getTime}>Get Time</button>
		</div>
	);
};
