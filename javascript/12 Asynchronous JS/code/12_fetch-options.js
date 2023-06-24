const createPost = (title, body) => {
	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		body: JSON.stringify({
			title,
			body,
		}),
		headers: {
			'Content-Type': 'application/json',
			token: 'ab123',
		},
	})
    .then((respond) => respond.json())
    .then((data) => console.log(data));

};

createPost({title: 'First Post', body: 'This is first post'});