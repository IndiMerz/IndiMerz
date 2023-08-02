import React, { useState } from 'react';

// export const ComplexState = () => {
//     const [fname, setfname] = useState('');
//     const [lname, setlname] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//     }

//     const handleFname = (e) => {
//         setfname(e.target.value)
//     }

//     const handleLname = (e) => {
//         setlname(e.target.value)
//     }

//   return (
//     <div>
//          <h1>Hello {fname} {lname}</h1>
//         <form onSubmit={handleSubmit}>
//             <input onChange={handleFname} name='fname' type='text' placeholder='First Name' />
//             <input onChange={handleLname} name='lname' type='text' placeholder='Last Name' />
//             <button>Submit</button>
//         </form>
//     </div>
//   )
// }

// Shorter Way
export const ComplexState = () => {
	const [fullname, setfullname] = useState({
		fname: '',
		lname: '',
	});

    const handleName = (e) => {
        const { value, name } = e.target;

        setfullname(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

	return (
		<div>
			<h1>
				Hello {fullname.fname} {fullname.lname}
			</h1>
			<form>
				<input
					onChange={handleName}
					name='fname'
					type='text'
					placeholder='First Name'
                    value={fullname.fname}
				/>
                <br />
				<input
					onChange={handleName}
					name='lname'
					type='text'
					placeholder='Last Name'
                    value={fullname.lname}
				/>
			</form>
		</div>
	);
};
