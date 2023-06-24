// Fetching JSON file
fetch('./06_movies.json')
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log(data);
	});

// Fetching text file
fetch('./11_text.txt')
	.then((response) => {
		return response.text();
	})
	.then((text) => {
		console.log(text);
	});

// Fetching data from an API
fetch('https://api.github.com/users/shahbaz4783/repos')
	.then((response) => {
		return response.json();
	})
	.then((repos) => {
		repos.forEach((repo) => {
			console.log(repo.name);
		});
	});
