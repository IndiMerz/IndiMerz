const API_URL =
	'https://script.google.com/macros/s/AKfycbx03S2s5m1i1xSJQkoHKzfh3OE8fsRh1TLMoaPdmIBt3M9Nv9jNu2Lox_npbi3-0aL8pQ/exec';

export const ContactForm = () => {
	const handleSubmit = (e) => {
		const contactForm = document.getElementById('contact-form');
		e.preventDefault();
		fetch(API_URL, { method: 'post', body: new FormData(contactForm) })
			.then((res) => alert('Your Form submitted successfully'))
			.then(() => {
				window.location.reload();
			})
			.catch((error) => console.log('error', error.message));
	};

	return (
		<>
			<form onSubmit={handleSubmit} className='contact-form' id='contact-form'>
				<input
					name='name'
					type='text'
					id='name'
					placeholder='Enter Your Name'
				/>
				<input
					name='email'
					type='email'
					id='email'
					placeholder='Enter Your Email'
					required
				/>
				<input
					name='phone'
					type='number'
					id='phone'
					placeholder='Enter Your Phone Number'
					required
				/>
				<input
					name='subject'
					type='text'
					id='subject'
					placeholder='Enter Subject'
				/>
				<textarea name='message' id='message' placeholder='Enter Message...' />
				<button className='submitBtn'>Submit</button>
			</form>
		</>
	);
};
