var body = document.getElementsByTagName('body')[0];
var style = document.createElement('style');
var options = {};

chrome.extension.sendRequest("get_thc_options", function(response) {
  options = response.options;
  style.innerHTML = 'a.hashtag, a.twitter-hashtag s, a.twitter-hashtag b {' + options.style + '}';
  body.appendChild(style);
});
/* vim: set ts=2 sw=2 sts=2 expandtab fenc=utf-8: */
