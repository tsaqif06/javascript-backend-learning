// impure function
//// mengubah keadaan di luar funcsinya, dan menghasilkan nilai yang berbeda degnagn argumen yg sama.
// let value = 0;

// function addWith(addingValue) {
// 	value += addingValue;
// 	console.log(`Current value is ${value}`);
// 	return value;
// }

// const result1 = addWith(1); // Output: Current value is 1
// const result2 = addWith(1); // Output: Current value is 2

// pure function
function addWith(value, addingValue) {
	return value + addingValue;
}

const result1 = addWith(0, 1);
console.log(`result1 is ${result1}`); // Output: result1 is 1

const result2 = addWith(result1, 1);
console.log(`result2 is ${result2}`); // Output: result2 is 2

const result3 = addWith(result2, 1);
console.log(`result3 is ${result3}`); // Output: result3 is 3
