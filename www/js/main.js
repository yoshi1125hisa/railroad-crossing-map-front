ons.ready(function() {
    console.log("Onsen UI is ready!");
});

window.fn = {};
window.fn.open = function() {
  console.log("menu is open!");
  var menu = document.getElementById('menu');
  menu.open();
};
window.fn.load = function(page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content
    .load(page)
    .then(menu.close.bind(menu));
};

document.addEventListener('prechange', function(event) {
  document.querySelector('ons-toolbar .center').innerHTML = event.tabItem.getAttribute('label');
});