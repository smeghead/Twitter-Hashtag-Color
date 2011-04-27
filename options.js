function get_thc_options() {
  try {
    var options = {style: 'coloe: #FF33FF;'};
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
  localStorage['thc_options'] = {};
}
