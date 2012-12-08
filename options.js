
function store_options() {
  var style = document.getElementById('style').value;
  save_thc_options({
    style: style
  });

  // Update status to let user know options were saved.
  var status = document.getElementById('status');
  status.innerHTML = 'Options Saved.';
  setTimeout(function() {
    status.innerHTML = "";
  }, 2000);
}

function restore_options() {
  var options = get_thc_options();
  document.getElementById('style').value = options.style;
}
function clear_options() {
  clear_thc_options();
  restore_options();
}

window.addEventListener('load', restore_options);
