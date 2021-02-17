const http = require('http');
const url = require('url');
const fs = require('fs');
http.createServer((request, response) => {
  const path = url.parse(request.url, true).pathname; // url에서 path 추출
  if (request.method === 'GET') { // GET 요청이면
    if (path === '/') { // 주소가 /이면
      response.writeHead(200,{'Content-Type':'text/html'});
      fs.readFile(__dirname + '/index.html', (err, data) => {
        if (err) {
          return console.error(err);
        }
        response.end(data, 'utf-8');
      });
    } else { // 매칭되는 주소가 없으면
        response.writeHead(200,{'Content-Type': 'application/javascript'});
        fs.readFile(__dirname + `/${path}`, (err, data) => {
            if (err) {
            return console.error(err);
            }
            response.end(data, 'utf-8');
        });
    }
  }
}).listen(5000);