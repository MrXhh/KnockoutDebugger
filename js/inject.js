
 // Record the last element to be right-clicked
 var rightclicked_item = null;
 $("body").bind("contextmenu", function (e) {
 	rightclicked_item = e.target;
 }).click(function () {
 	rightclicked_item = null;
 });

var eventHandlers = {
	"dumpKoContext": function() {
		console.log(ko.dataFor(rightclicked_item));
	}
};


 window.addEventListener("message", function(event) {
 	console.log(event);
	if (event.source != window) {
		return;
	};

	var val = event.value;
 });
 console.log("SCD Dev tools loaded");