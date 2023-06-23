const xhr = new XMLHttpRequest();

xhr.open('GET', './06_movies.json');


// ready stage has 5 possible values
// 0: request not initialised
// 1: server conncetion established
// 2: request received
// 3: processing request
// 4: request finished and respond is ready

xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200){
        // console.log(JSON.parse(this.responseText));
        const data = JSON.parse(this.responseText);

        data.forEach((movies) => {
            const list = document.createElement('li');
            list.innerHTML = `<strong>${movies.Title}</strong> - ${movies.Released}, ${movies.Country}`;
            document.getElementById('movies').append(list);
        })
    }
}
xhr.send();



// getting data from APIs

const xhr2 = new XMLHttpRequest();

xhr2.open('GET', 'https://api.github.com/users/shahbaz4783/repos');

xhr2.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200){
        // console.log(JSON.parse(this.responseText));
        const data = JSON.parse(this.responseText);

        data.forEach((repos) => {
            const list = document.createElement('li');
            list.innerHTML = `<strong>${repos.name}</strong> - ${repos.description}`;
            document.getElementById('repos').append(list);
        })
    }
}
xhr2.send();



const xhr3 = new XMLHttpRequest();
xhr3.open('GET', './07_indian-movies.json');

xhr3.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200){
        // console.log(JSON.parse(this.responseText));
        const data = JSON.parse(this.responseText);

        data.forEach((repos) => {
            const list = document.createElement('li');
            list.innerHTML = `<strong>${repos.title}</strong> - ${repos.year}`;
            document.getElementById('indian-movies').append(list);
        })
    }
}

xhr3.send();