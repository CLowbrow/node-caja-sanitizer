# node-caja-sanitizer

Port of the google caja html sanitizer library. 

## Use

Require the library and go

	var sanitize = require('html-css-sanitizer').sanitize;
	var result = sanitize('test<script>console.log("hi there");</script>');

# More info

[https://code.google.com/p/google-caja/wiki/JsHtmlSanitizer](https://code.google.com/p/google-caja/wiki/JsHtmlSanitizer)