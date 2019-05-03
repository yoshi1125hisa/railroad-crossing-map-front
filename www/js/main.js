ons.ready(function() {
    console.log("Onsen UI is ready!");
});

window.fn = {};
window.fn.open = function() {
  console.log("menu is open!");
  let menu = document.getElementById('menu');
  menu.open();
  console.log("menu is opend!")
};
window.fn.load = function(page) {
  let content = document.getElementById('content');
  let menu = document.getElementById('menu');
  content
    .load(page)
    .then(menu.close.bind(menu));
};

document.addEventListener('prechange', function(event) {
  document.querySelector('ons-toolbar .center').innerHTML = event.tabItem.getAttribute('label');
});
