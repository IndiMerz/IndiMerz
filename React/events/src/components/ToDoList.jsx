import React, { useState } from 'react';
import { ToDoItems } from './ToDoItems';

export const ToDoList = () => {
	const [inputText, setinputText] = useState('');
	const [items, setItems] = useState([]);

    const handleChange = (e) => {
        setinputText(e.target.value)
    }

    const addItem = () => {
        setItems((prevVal) => {
            return [
                ...prevVal,
                inputText
            ] 
        });
        setinputText('')
    }

	return (
		<div className='container'>
			<div className='heading'>
				<h1>To-Do List</h1>
			</div>
			<div className='form'>
				<input onChange={handleChange} type='text' value={inputText}/>
				<button onClick={addItem}>
					<span>Add</span>
				</button>
			</div>
			<div>
				<ul>
					{
                        items.map(item => <ToDoItems text={item} />)
                    }
				</ul>
			</div>
		</div>
	);
};
