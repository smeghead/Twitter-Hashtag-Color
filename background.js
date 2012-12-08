chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request == "get_thc_options") {
      sendResponse({options: get_thc_options()});
    }
  }
);

var default_options = {style: 'color: #FF33FF !important;'};
function get_thc_options() {
  try {
    var options = default_options;
    if (localStorage.thc_options) {
      options = JSON.parse(localStorage.thc_options);
    }
  
    //save
    save_thc_options(options);
    return options;
  } catch (e) {
    console.log(e);
  }
}
function save_thc_options(options) {
  localStorage['thc_options'] = JSON.stringify(options);
}
function clear_thc_options() {
  localStorage['thc_options'] = JSON.stringify(default_options);
}
