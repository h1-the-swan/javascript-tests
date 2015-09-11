var myApp = myApp || {};
console.log(egoGraphVis);
// var egoGraphVis = egoGraphVis;

d3.json("miserables.json", function(error, graph) {
	if(error) throw error;

	console.log(egoGraphVis);
	var g = new egoGraphVis(graph);

});

// (function() {
// 	// var graphVis = myApp.myForceDirectedGraph;
// 	// console.log(graphVis);
// 	
// 	d3.json("miserables.json", function(error, graph) {
// 		if (error) throw error;
//
// 		console.log(egoGraphVis);
// 		var egoGraphVis = new egoGraphVis(graph);
// 	});
// }());
//
// window.onload = function() {
//     var g = new egoGraphVis();
// 	console.log(g);
// };
