export const fetchGhibliMovies = () =>
	fetch('https://ghibliapi.herokuapp.com/films/')
		.then(response => response.json())
		.then(json => json.map(({ title }) => ({ value: title, label: title })));
