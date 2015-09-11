function egoGraphVis(data) {
	var self = this;
	self.data = data;

	// Defaults
	self.width = 960,
	self.height = 500;

	self.init();
	console.log(self);

	return self;


}

egoGraphVis.prototype.init = function() {
	var self = this;

	self.force = d3.layout.force()
		.charge(-120)
		.linkDistance(30)
		.size([self.width, self.height]);


	self.force
		.nodes(self.data.nodes)
		.links(self.data.links)
		.start();

	var svg = d3.select("body").append("svg")
		.attr("width", self.width)
		.attr("height", self.height);

	var link = svg.selectAll(".link")
		.data(self.data.links)
		.enter().append("line")
		.attr("class", "link");

	var node = svg.selectAll(".node")
		.data(self.data.nodes)
		.enter().append("circle")
		.attr("class", "node")
		.attr("r", 5)
		.call(self.force.drag);

	self.force.on("tick", function() {
		link.attr("x1", function(d) { return d.source.x; })
			.attr("y1", function(d) { return d.source.y; })
			.attr("x2", function(d) { return d.target.x; })
			.attr("y2", function(d) { return d.target.y; });

		node.attr("cx", function(d) { return d.x; })
			.attr("cy", function(d) { return d.y; });
	});
	console.log(self.force.nodes());
};

