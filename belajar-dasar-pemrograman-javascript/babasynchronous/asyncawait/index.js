import { doSomething } from "./utils.js";

// console.log("Start.");

// doSomething().then((value) => {
// 	console.log(value);
// });

// console.log("End.");

/* Output:
Start.
End.
You did it.
*/

async function promiseWithAsyncAwait() {
	try {
		console.log("Start.");

		const result = await doSomething();
		console.log(result);

		console.log("End.");
	} catch (error) {
		console.log(error.message);
	}
}

promiseWithAsyncAwait();

/* Output:
Start.
You did it.
End.
*/
