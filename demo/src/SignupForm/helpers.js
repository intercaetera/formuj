export const fetchGhibliMovies = () =>
	fetch('https://ghibliapi.herokuapp.com/films/')
		.then(response => response.json())
		.then(json => json.map(({ title }) => ({ value: title, label: title })));

export const capitals = {
	'': [],
	pl: ['Warsaw', 'Warszawa'],
	el: ['Athens', 'Αθήνα'],
	cy: ['Nicosia', 'Λευκωσία'],
};
