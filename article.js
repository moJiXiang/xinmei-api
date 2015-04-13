var	mongojs = require('mongojs');

var config = require('./config.js');
var db = mongojs(config.db, ['stockarticles']);

var apis = {
	respond : function(req, res, next) {
		db.stockarticles.find(function(err, articles) {
			res.writeHead(200, {
		        'Content-Type': 'application/json; charset=utf-8'
		    });
			res.end(JSON.stringify(articles))
			return next();
		})
	}
}

module.exports = apis;