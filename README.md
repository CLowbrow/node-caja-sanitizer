# node-caja-sanitizer

Port of the google caja html sanitizer library.

## Use

Require the library and go

	var sanitizer = require('html-css-sanitizer');
	function urlX(u) { return u } //url transformer (noop here)
	function idX(id) { return id } //id transformer (noop here)
	function sanitize (string) {
	  return sanitizer.sanitize(string, urlX, idX);
	}
	var result = sanitize('test<script>console.log("hi there");</script>');

The default caja library doesn't handle self-closing tags in the best way, so I'm stealing a pull request from isaacs to create a smartSanitize method. To use that, do this:

	function smartSanitize (string) {
	  return sanitizer.smartSanitize(string, urlX, idX);
	}
	result = smartSanitize('<p><a name="foo"/> This is the foo section.</p><p><a name="bar"/> This is the bar section.</p>');

I'm NOT overwriting the original caja sanitize call because.


# More info

[https://code.google.com/p/google-caja/wiki/JsHtmlSanitizer](https://code.google.com/p/google-caja/wiki/JsHtmlSanitizer)