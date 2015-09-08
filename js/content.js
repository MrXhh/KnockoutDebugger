//inject script in page 
var s = document.createElement('script');
s.src = chrome.extension.getURL('js/inject.js');
s.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(s);

//setup com with injected script
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    if(request == "getContextElement") {
		//console.log(ko.contextFor(rightclicked_item).$data);
		window.postMessage({ action: "dumpKoContext" }, "*")
    }
});
