const routes = [
	{
		method: "GET",
		path: "/",
		handler: (request, h) => {
			return "Hello World!";
		},
	},
	{
		method: "*",
		path: "/",
		handler: (request, h) => {
			return "Halaman tidak dapat diakses dengan method tersebut";
		},
	},
	{
		method: "GET",
		path: "/about",
		handler: (request, h) => {
			return h
				.response("success")
				.type("text/plain")
				.header("Custom-Header", "some-value");
		},
	},
	{
		method: "*",
		path: "/about",
		handler: (request, h) => {
			return "Halaman tidak dapat diakses dengan method tersebut";
		},
	},
	{
		method: "GET",
		path: "/hello/{name?}",
		handler: (request, h) => {
			const { name = "stranger" } = request.params;
			const { lang } = request.query;

			if (lang === "id") {
				return `Hai, ${name}!`;
			}
			return `Hello, ${name}!`;
		},
	},

	/**
	 * curl -X POST -H "Content-Type: application/json" http://localhost:5000/login -d "{\"username\": \"fulan\", \"password\": \"123\"}"
	 */
	{
		method: "POST",
		path: "/login",
		handler: (request, h) => {
			const { username, password } = request.payload;
			return `Welcome ${username}!`;
		},
	},

	{
		method: "POST",
		path: "/user",
		handler: (request, h) => {
			return h.response("created").code(201);
		},
	},
	{
		method: "*",
		path: "/{any*}",
		handler: (request, h) => {
			return "Halaman tidak ditemukan";
		},
	},
];

module.exports = routes;
