const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Alguien accedió al servidor");
  res.end("Respuesta");
});

server.listen(8080);
