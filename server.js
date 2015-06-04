'use strinct';

var express = require('express'),
    serveStatic = require('serve-static'),
    app = express();

// Port to test frontend
var port = 8080;

app.use(serveStatic(__dirname + '/public'));

app.get('*', function(req, res) {
  if (req.originalUrl !== '/') {
    res.redirect('/#' + req.originalUrl);
  }
});

app.listen(port, function() {
  console.log('DoggerJS Frontend: Running on port ' + port);
});
