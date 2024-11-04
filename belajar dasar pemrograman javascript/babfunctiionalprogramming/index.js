// Functional programming (selanjutnya disingkat menjadi FP) adalah paradigma pemrograman yang didasarkan pada fungsi matematika murni, yakni fungsi harus menghindari perubahan data sehingga selalu menghasilkan nilai sama ketika diberikan argumen sama.
const names = ["Harry", "Ron", "Jeff", "Thomas"];

// const newNamesWithExcMark = [];

// for (let i = 0; i < names.length; i++) {
// 	newNamesWithExcMark.push(`${names[i]}!`);
// }

// console.log(newNamesWithExcMark); // output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]


const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = names.map((name) => `${name}!`);

console.log(newNamesWithExcMark); // output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]