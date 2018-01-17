
var http 	= require('http');
var fs 		= require('fs');
var express = require('express');

var app = express();

app.use(express.static( __dirname + '/' ));

app.get('/', function(req, res) {
	res.end(html)
})

app.listen(8080);

var html = `
    <!DOCTYPE html>
      <html>
      <head>
          <script id="detecter" type="text/javascript">
          (function(win, doc, detect, options){
          	if (detect()) {
          		document.write('<meta name="viewport" content="width=device-width, initial-scale=1">');
          		document.write('<p>hello mobile</p>');
          		document.write('<plaintext style="display:none">');
	          	load = function() {
	  				attachedScript = document.createElement('script'),
					tagScript = document.getElementsByTagName('script')[0];

					attachedScript.src = options.dataUrl+'core.js';
					attachedScript.id = 'engine';
					attachedScript.charset = 'utf-8';

					tagScript.parentNode.insertBefore(attachedScript, tagScript);
					attachedScript.onload = attachedScript.onreadystatechange = function() {
						if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
							try {
								Core.init(window, document, storage, options);
							} catch (e) {
								console.error('Unable to initialize Flamingo Engine', e);
							};

							try {
								attachedScript.onload = attachedScript.onreadystatechange = null;
								attachedScript.parentNode && attachedScript.parentNode.removeChild(attachedScript);
							} catch(e) {}
						}
					};
	          	};
	          	setTimeout(load);
	          	}
          }
          (
          	window,
          	document, 
          	function detect() {	return (navigator.userAgent.match(/iPhone|Ipod/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/(Mobile|Tablet);.*rv:.*Gecko/i));},
			{
				dataUrl: './js/',
				loader: {
					image: ''
				}
			}
          ))
          </script>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body>
        <div id="root">
        	Hello desktop
        </div>
      </body>
    </html>
  `;