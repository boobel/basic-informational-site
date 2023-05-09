const http = require("http");
var fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) throw err;
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      return res.end;
    });
  } else if (url === "/contact-me") {
    fs.readFile("contact-me.html", (err, data) => {
      if (err) throw err;
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      return res.end;
    });
  } else if (url === "/about") {
    fs.readFile("about.html", (err, data) => {
      if (err) throw err;
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      return res.end;
    });
  } else {
    fs.readFile("404.html", (err, data) => {
      if (err) throw err;
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      return res.end;
    });
  }
});

server.listen(3000);
