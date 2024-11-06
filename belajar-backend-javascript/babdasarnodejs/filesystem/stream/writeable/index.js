/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const fs = require("fs");

const readableStream = fs.createReadStream("./input.txt", {
	highWaterMark: 15,
});

const writableStream = fs.createWriteStream("output.txt");

readableStream.on("readable", () => {
	try {
		writableStream.write(`${readableStream.read()}\n`);
	} catch (error) {
		console.error("Terjadi kesalahan saat membaca stream:", error);
	}
});

readableStream.on("end", () => {
	writableStream.end();
});
// console.log(readableOutput);
// writableStream.write("Ini merupakan teks baris pertama!\n");
// writableStream.write("Ini merupakan teks baris kedua!\n");
