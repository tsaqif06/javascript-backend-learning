// import { doSomething } from './utils.mjs';

// function onFulfilled(doSomethingData) {
//   // Do your jobs when "fulfilled" happens…
//   console.log(doSomethingData);
// }

// function onRejected(doSomethingError) {
//   // Do your jobs when "rejected" happens…
//   console.log(doSomethingError);
// }

// doSomething().then(onFulfilled, onRejected);

// CHAINING
import { makeCoffee, sendCoffee } from "./coffee.js";

const order = "Kopi Espresso";

console.log(`Saya memesan ${order} di kafe.`);

// makeCoffee(order)
//   .then(
//     (value) => {
//       return sendCoffee(value);
//     },
//     (error) => {
//       console.error(error.message);
//       throw error;
//     },
//   )
//   .then(
//     (value) => {
//       console.log(`Pramusaji memberikan ${value} pesanan.`);
//       console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
//     },
//     (error) => {
//       console.error(error.message);
//       throw error;
//     },
//   );

// JIka dirasa error nya itu sama bisa dibuat ctach seperti ini
makeCoffee(order)
	.then((value) => {
		return sendCoffee(value);
	})
	.then((value) => {
		console.log(`Pramusaji memberikan ${value} pesanan.`);
		console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
	})
	.catch((error) => {
		console.log(error.message);
	});
