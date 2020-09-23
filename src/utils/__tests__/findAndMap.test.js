import findAndMap from '../findAndMap';

const COLLECTION = [ 1, 2, 3 ];
const callback = a => {
	const square = a * a;
	return square % 2 ? false : square;
};

test('when given a collection, returns the first element that returns a non-falsy value with a function applied', () => {
	const firstEvenSquare = findAndMap(COLLECTION, callback);
	expect(firstEvenSquare).toBe(4);
});
