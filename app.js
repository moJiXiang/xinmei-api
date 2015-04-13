var restify = require('restify'),
	mongojs = require('mongojs'),
	config = require('./config.js');

var db = mongojs(config.db);
var article = require('./article')

var server = restify.createServer();
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());


server.get('/articles', article.respond);

server.listen(3900, function() {
  console.log('%s listening at %s', server.name, server.url);
});