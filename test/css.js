var test = require('tap').test;
var sanitizer = require('../sanitizer');
var url = require('url');

function urlX(url) { if(/^https?:\/\//.test(url)) { return url }}
function idX(id) { return id }
function sanitize (string) {
  return sanitizer.sanitize(string, urlX, idX);
}

test('make sure I can include sanitizer', function (t) {
  var string = 'a string goes here';
  var result = sanitize(string);
  t.equal(string, result);
  t.end();
});

test('no script tags', function (t) {
  var string = 'a string goes here <script> console.log("hi there");</script>';
  var result = sanitize(string);
  t.equal('a string goes here ', result);
  t.end();
});
test('links are ok', function (t) {
  var string = '<a href="http://www.google.com">google</a>';
  var result = sanitize(string);
  t.equal(result, string);
  t.end();
});
test('inline styles are ok', function (t) {
  var string = '<div style="height: 34px">some text</div>';
  var result = sanitize(string);
  t.equal(result, string);
  t.end();
});