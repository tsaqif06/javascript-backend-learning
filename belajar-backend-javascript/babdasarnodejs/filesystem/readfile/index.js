// TODO: tampilkan teks pada notes.txt pada console.
const fs = require("fs");

// const data = fs.readFileSync('notes.txt', 'UTF-8');
// console.log(data);
const data = fs.readFile("notes.txt", "UTF-8", (err, data) => {
	if (err) {
		console.log("Gagal memuat berkas!");
	}

	console.log(data);
});
