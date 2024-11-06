// const { EventEmitter } = require("events");

// const myEventEmitter = new EventEmitter();

// const makeCoffee = (name) => {
// 	console.log(`Kopi ${name} telah dibuat!`);
// };

// const makeBill = (price) => {
// 	console.log(`Bill sebesar ${price} telah dibuat!`);
// };

// const onCoffeeOrderedListener = ({ name, price }) => {
// 	makeCoffee(name);
// 	makeBill(price);
// };

// myEventEmitter.on("coffee-order", onCoffeeOrderedListener);

// myEventEmitter.emit("coffee-order", { name: "Tubruk", price: 15000 });

/**
 * output:
 * Kopi Tubruk telah dibuat!
 * Bill sebesar 15000 telah dibuat!
 */

// TODO 1
const { EventEmitter } = require("events");

const birthdayEventListener = (name) => {
	console.log(`Happy birthday ${name}!`);
};

// TODO 2
const myEventEmitter = new EventEmitter();

// TODO 3
myEventEmitter.on('birthday', birthdayEventListener);

// TODO 4
myEventEmitter.emit('birthday', 'Fulan');