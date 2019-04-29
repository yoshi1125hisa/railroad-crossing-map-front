ons.ready(function() {
    console.log("Onsen UI is ready!");

    var infiniteList = document.getElementById('infinite-list');

    infiniteList.delegate = {
      createItemContent: function(i) {
        return ons.createElement('<ons-list-item>Item ' + i + '</ons-list-item>');
      },
      countItems: function() {
        return 10000;
      }
    };
    infiniteList.refresh();
});

document.addEventListener('prechange', function(event) {
  document.querySelector('ons-toolbar .center').innerHTML = event.tabItem.getAttribute('label');
});