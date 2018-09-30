var express = require('express');
var config = require('./config/index');

var port = process.env.PORT || config.build.port;

var app = express();

var router = express.Router();

router.get('/', function (req, res, next) {
	req.url = '/index.html';
	next();
});

app.use(router);

var appData = require('./data.json');
var products = appData.products;
var cases = appData.cases;
var constructs = appData.constructs;
var news = appData.news;

var apiRoutes = express.Router();

apiRoutes.get('/constructss', function (req, res) {
	res.json({
		errno: 0,
		data: constructs
	});
});

apiRoutes.get('/newss', function (req, res) {
	res.json({
		errno: 0,
		data: news
	});
});

apiRoutes.get('/cases', function (req, res) {
	res.json({
		errno: 0,
		data: cases
	});
});
apiRoutes.get('/productss', function (req, res) {
	res.json({
		errno: 0,
		data: products
	});
});
apiRoutes.get('/homes', function (req, res) {
	res.json({
		errno: 0,
		data: products
	});
});

app.use('/', apiRoutes);

app.use(express.static('./dist'));

module.exports = app.listen(port, function (err) {
	if (err) {
		console.log(err);
		return
	}
	console.log('Listening at http://localhost:' + port + '\n')
});
