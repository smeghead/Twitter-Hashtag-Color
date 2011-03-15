console.log('content-script.js: initialize start.');

var body = document.getElementsByTagName('body')[0];
body.addEventListener('DOMNodeInserted', function(event){
  var links = event.target.getElementsByTagName('a');
  for (var i = 0; i < links.length; i++) {
    var a = links[i];
    if (a.className.indexOf('twitter-hashtag') > -1) {
      a.style.color = '#FF33FF';
    }
  }
});
/* vim: set ts=2 sw=2 sts=2 expandtab fenc=utf-8: */
