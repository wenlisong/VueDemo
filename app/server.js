const http = require('http');

const urlModule = require('url');

const server = http.createServer();


server.on('request', function (req, res) {
  const { pathname: url, query } = urlModule.parse(req.url, true);

  if(url === '/getscript'){
    var data = {
      name: 'abc',
      age: 20,
      gender: 'female',
    };

    var scriptStr = `${query.callback}(${JSON.stringify(data)})`;
    res.end(scriptStr);
  }else{
    res.end(404);
  }
});

server.listen(3000, function() {
  console.log('server listen at http://127.0.0.1:3000');
});