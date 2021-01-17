let nums = [ 1, 2, 3, 4, 5 ];

// function double(arr) {
// 	return arr.map(function(val) {
// 		return val * 2;
// 	});
// }

//*********************
//refactored as arrow function
//*********************
// const double = (arr) => {
// 	return arr.map((val) => {
// 		return val * 2;
// 	});
// };

//***********************
//one-liner
//***********************
const double = (arr) => arr.map((val) => val * 2);

// function squareAndFindEvens(numbers) {
// 	var squares = numbers.map(function(num) {
// 		return num ** 2;
// 	});
// 	var evens = squares.filter(function(square) {
// 		return square % 2 === 0;
// 	});
// 	return evens;
// }

const squareAndFindEvens = (numbers) => {
	const squares = numbers.map((num) => num ** 2);
	const evens = squares.filter((square) => square % 2 === 0);
	return evens;
};
