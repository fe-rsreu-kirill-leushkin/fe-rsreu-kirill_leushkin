var http = require("http");
var path = require("path");
var fs = require("fs");
var checkMimeType = true;
var port = 8000;
var books = JSON.parse(fs.readFileSync('books.json', 'utf8')); // ??

http.createServer(function(req, res) {
  var now = new Date();
  var filename = req.url || "index.html";

  filename = filename === '/' ? "/index.html" : filename;
  if (filename === '/getBooks') {
    onGetBooks(res);
    return;
  }

  if (filename === '/rateBook') {
    onRateBook(req, res);
    return;
  }

  if (filename === '/addBook') {
    onAddBook(req, res);
    return;
  }

  var ext = path.extname(filename);
  var localPath = __dirname;
  var validExtensions = {
    ".html": "text/html",
    ".js": "application/javascript",
    ".json": "application/json",
    ".css": "text/css",
    ".txt": "text/plain",
    ".jpg": "image/jpg",
    ".gif": "image/gif",
    ".png": "image/png",
    ".ico": "image/ico", // ??
    ".woff": "application/font-woff",
    ".woff2": "application/font-woff2"
  };

  var validMimeType = true;
  var mimeType = validExtensions[ext];

  if (checkMimeType) {
    validMimeType = validExtensions[ext] !== undefined;
  }

  if (validMimeType) {
    localPath += filename;
    fs.exists(localPath, function(exists) {
      if (exists) {
        console.log("Serving file: " + localPath);
        getFile(localPath, res, mimeType);
      } else {
        console.log("File not found: " + localPath);
        res.writeHead(404);
        res.end();
      }
    });

  } else {
    console.log("Invalid file extension detected: " + ext + " (" + filename + ")");
  }

}).listen(port);

function getFile(localPath, res, mimeType) {
  fs.readFile(localPath, function(err, contents) {
    if (!err) {
      res.setHeader("Content-Length", contents.length);
      if (mimeType !== undefined) {
        res.setHeader("Content-Type", mimeType);
      }
      res.statusCode = 200;
      res.end(contents);
    } else {
      res.writeHead(500);
      res.end();
    }
  });
}

function onGetBooks(res) {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;
  res.end(JSON.stringify(books));
}

function onRateBook(req, res) {
  console.log('Rate book request');
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;

  var reqBody = '';

  req.on('data', function(data) {
    reqBody += data;
    var book = JSON.parse(reqBody);
    books.splice(book.id - 1, 1, book);

    fs.writeFile('books.json', JSON.stringify(books), function(err) {
      if (err) {
        console.error(err);
      }
    });

    res.end(JSON.stringify(books));
  });
}

function onAddBook(req, res) {
  console.log('Add book request');
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;

  var reqBody = '';

  req.on('data', function(data) {
    reqBody += data;
    var book = JSON.parse(reqBody);

    books.push(book);

    fs.writeFile('books.json', JSON.stringify(books), function(err) {
      if (err) {
        console.error(err);
      }
    });

    res.end(JSON.stringify(books));
  });
}

console.log("Starting web server at localhost:" + port);
