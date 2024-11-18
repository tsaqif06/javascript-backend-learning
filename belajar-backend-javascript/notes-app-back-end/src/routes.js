const {
	getAllNoteHandler,
	getNoteByIdHandler,
	addNoteHandler,
	editNoteByIdHandler,
	deleteNoteByIdHandler,
} = require("./handler");

const routes = [
	{
		method: "GET",
		path: "/notes",
		handler: getAllNoteHandler,
	},
	{
		method: "GET",
		path: "/notes/{id}",
		handler: getNoteByIdHandler,
	},
	{
		method: "PUT",
		path: "/notes/{id}",
		handler: editNoteByIdHandler,
	},
	{
		method: "DELETE",
		path: "/notes/{id}",
		handler: deleteNoteByIdHandler,
	},
	{
		method: "POST",
		path: "/notes",
		handler: addNoteHandler,
		// options: {
		//   cors: {
		//     origin: ['*'],
		//   },
		// },
	},
];

module.exports = routes;
