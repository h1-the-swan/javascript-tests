var myApp = myApp || {};

myApp.load_data = (function() {
	
	
	var data;
	var fname = "miserables.json";
	function d3jsondata(fname, callback) {
		d3.json(fname, function(error, graph) {
			if (error) throw error;
			console.log(graph);

			// data = graph;
			callback(graph);

		});
	};

	d3jsondata(fname, function(d) {
		console.log(d);
		// data = d;
		return d;
	});
	// var data = d3jsondata();
	// console.log(data);
	// return data;
	// return 't';
}());

