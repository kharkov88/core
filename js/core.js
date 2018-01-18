var Core = {
	version: 0.1
}
Core.init = function(window, document, storage, options) {return true}
Core.implement =  function() {
	var doc = document.implementation.createHTMLDocument("");
	console.log(String(doc))
	console.log(`${doc}`)
	//document.write(String(doc));
}