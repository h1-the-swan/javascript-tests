var myApp = myApp || {};

myApp.myForceDirectedGraph = (function() {
	// var data = myApp.load_data;
	// console.log(data);

	// defaults
	var default_options = myApp.default_options.defaults;
	var width = default_options.width,
	    height = default_options.height;

	var force = d3.layout.force()
		.charge(-120)
		.linkDistance(30)
		.size([width, height]);

	var svg = d3.select("body").append("svg")
		.attr("width", width)
		.attr("height", height);


	var graphVis = function(data) {
		force
			.nodes(data.nodes)
			.links(data.links)
			.start();

		var link = svg.selectAll(".link")
			.data(data.links)
			.enter().append("line")
			.attr("class", "link");

		var node = svg.selectAll(".node")
			.data(data.nodes)
			.enter().append("circle")
			.attr("class", "node")
			.attr("r", 5)
			.call(force.drag);

		force.on("tick", function() {
			link.attr("x1", function(d) { return d.source.x; })
				.attr("y1", function(d) { return d.source.y; })
				.attr("x2", function(d) { return d.target.x; })
				.attr("y2", function(d) { return d.target.y; });

			node.attr("cx", function(d) { return d.x; })
				.attr("cy", function(d) { return d.y; });
		});

		


	};

	return graphVis;
}());
