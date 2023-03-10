const http = require("http");


http.createServer(function (req, res)
// You can also set using the following method
res.setHeader('Access-Control-Allow-Origin', '*'); /* @dev First, read about security */
res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
res.setHeader('Access-Control-Max-Age', 2592000); // 30 days


	if(req.method == "POST")
	{
		let json_post = "";

		req.on("data", function(data){
		json_post += data;
		});

		req.on("end", function(data){
			console.log(json_post);
			res.end()
	});
	return;
}


{
	let items = [
	{id_item:1, item: "Comprar patatas"},
	{id_item:2, item: "Todo el mundo"},
	{id_item:3, item: "Conquistar Polonia"}
	];

	let items_json = JSON.stringify(items);
	res.write(items_json);
	res.end();

}).listen(7070);
