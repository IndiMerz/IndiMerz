import React, { useState } from 'react';

export const ToDoItems = ({ text }) => {
    const [isDone, setisDone] = useState(false)

    const workDone = () => {
        setisDone(prevValue => {
            return !prevValue
        })
    }

	return (
		<li 
        style={{ textDecoration: isDone ? 'line-through' : 'none' }} 
        onClick={workDone}
        >
        {text}
        </li>
	);
};
