var default_options = {style: 'color: #FF33FF !important;'};
function get_thc_options() {
  try {
    var options = default_options;
    //console.log(options);
    console.log('y');
    console.log(localStorage.thc_options);
    if (localStorage.thc_options) {
    console.log('yy');
      options = JSON.parse(localStorage.thc_options);
    }
    console.log('z');
  
    //save
    save_thc_options(options);
    console.log('x');
    console.log(options);
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
