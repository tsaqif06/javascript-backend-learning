// - process.env -
// const http = require("http");
// const hostname =
// 	process.env.NODE_ENV !== "production" ? "localhost" : "dicoding.com";
// const port = 3000;
// const requestHandler = (req, res) => {
// 	res.statusCode = 200;
// 	res.setHeader("Content-Type", "text/plain");
// 	res.end("Hello, World!\n");
// };
// const server = http.createServer(requestHandler);
// server.listen(port, hostname, () => {
// 	console.log(`Server berjalan pada http://${hostname}:${port}/`);
// });

// SET NODE_ENV=production && node app.js //

// ----------------------------------------------------------------
//  - process.memoryUsage(); - 

// const memoryInformation = process.memoryUsage();

// console.log(memoryInformation);

/* output
{
  rss: 14569472,
  heapTotal: 2654208,
  heapUsed: 1788896,
  external: 855681,
  arrayBuffers: 9898
}
*/

// --------------------------------------------------
// -  process.argv - 

// const firstName = process.argv[2];
// const lastName = process.argv[3];

// console.log(`Hello ${firstName} ${lastName}`);

// node app.js "harry" "potter"


const initialMemoryUsage = process.memoryUsage();// TODO 1
const yourName = process.argv[2];// TODO 2
const environment = process.env.NODE_ENV;// TODO 3
 
for(let i = 0; i <= 10000; i++) {
// Proses looping ini akan membuat penggunaan memori naik
}
 
const currentMemoryUsage = process.memoryUsage()// TODO 4
 
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${JSON.stringify(initialMemoryUsage)} naik ke ${JSON.stringify(currentMemoryUsage)}`);