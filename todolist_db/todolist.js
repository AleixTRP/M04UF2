const http = require("http");


http.createServer(function (req, res)
{
	let items = [
	{id_item:1, item: "Comprar patatas"},
	{id_item:2, item: "Todo el mundo"},
	{id_item:3, item: "Conquistar Polonia"}
	];

	let items_json = JSON.stringify(items);

// You can also set using the following method
res.setHeader('Access-Control-Allow-Origin', '*'); /* @dev First, read about security */
res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
res.setHeader('Access-Control-Max-Age', 2592000); // 30 days

	res.write(items_json);
	res.end();

}).listen(7070);
