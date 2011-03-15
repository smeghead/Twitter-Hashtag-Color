console.log('content-script.js: initialize start.');

var body = document.getElementsByTagName('body')[0];
body.addEventListener('DOMNodeInserted', function(event){
  if (typeof event.target.querySelectorAll !== 'function')
    return; // maybe text node
  Array.prototype.slice.call(event.target.querySelectorAll('a.hashtag, a.twitter-hashtag')).forEach(function(n) {
    n.style.color = '#FF33FF';
  });
});
/* vim: set ts=2 sw=2 sts=2 expandtab fenc=utf-8: */
