const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.static("public", { extensions: ["html"] }));

app.use((req, res) => {
  res.status(404).sendFile("/404.html", { root: __dirname + "/public" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

/* 
const fs = require("fs");
const path = require("path");
const http = require("http");

const server = http.createServer((req, res) => {
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  // Extension
  let extname = path.extname(filePath);
  let contentType = "text/html";
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }


  if (contentType == "text/html" && extname == "") filePath += ".html";

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // Page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        //  Some server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
 */
