(function(chrome) {
	function koContextOnClick(info, tab) {
		console.log("info: " + JSON.stringify(info));
		console.log("tab: " + JSON.stringify(tab));
		chrome.tabs.sendMessage(tab.id, "getContextElement", function(element) {
	    });
	}

	var koContext = chrome.contextMenus.create({
		"title": "KO Context",
		"onclick" : koContextOnClick
	});
}(chrome));