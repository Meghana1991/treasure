/**
 * If you’ve worked with Apache or IIS, you’re probably used to just creating an HTML
file, navigating to it, and having it delivered to the browser automatically. Node doesn’t
work like that: we’re going to have to do the work of opening the file, reading it, and
then sending its contents along to the browser
 */

var http = require('http'),
    fs = require('fs');
function serveStaticFile(res, path, contentType, responseCode) {
    if (!responseCode) responseCode = 200;
    fs.readFile(__dirname + path, function (err, data) {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 - Internal Error');
        } else {
            res.writeHead(responseCode,
                { 'Content-Type': contentType });
            res.end(data);
        }
    });
}
http.createServer(function (req, res) {
    // normalize url by removing querystring, optional
    // trailing slash, and making lowercase
    var path = req.url.replace(/\/?(?:\?.*)?$/, '')
        .toLowerCase();
    switch (path) {
        case '':
            serveStaticFile(res, '/public/home.html', 'text/html');
            break;
        case '/about':
            serveStaticFile(res, '/public/about.html', 'text/html');
            break;
        case '/img/logo.jpg':
            serveStaticFile(res, '/public/img/logo.jpg',
                'image/jpeg');
            break;
        default:
            serveStaticFile(res, '/public/404.html', 'text/html',
                404);
            break;
    }
}).listen(3000);