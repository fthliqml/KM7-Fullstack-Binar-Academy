const http = require("http");
const fs = require("fs");
const fsAsync = require("fs").promises;

const fileUtama = fs.readFileSync("./index.txt", "utf-8");

const server = http.createServer((req, res) => {
  const pathUrl = req.url;

  if (pathUrl === "/iqmal") {
    res.end("INI TUGAS IQMAL");
  }
  if (pathUrl === "/") {
    res.end("Halo Semua");
  } else {
    res.end("Error Status Code 404");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Aplikasi jalan di port 3000");
});

async function reWrite(filepath, content) {
  try {
    await fsAsync.writeFile(fileUtama, content);
    console.log("sukses");
  } catch (error) {}
}
