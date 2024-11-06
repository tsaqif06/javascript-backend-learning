const { readFile, writeFile } = require("fs/promises");
const flowRemoveTypes = require("flow-remove-types");

(async () => {
	try {
		const input = await readFile("add.js", "utf8");
		const output = flowRemoveTypes(input, {
			pretty: true,
			all: true,
		});
		await writeFile("output.js", output.toString());

		console.log("Flow type annotations terhapus! Silakan cek `output.js`.");
	} catch (error) {
		console.error("Error:", error);
	}
})();
