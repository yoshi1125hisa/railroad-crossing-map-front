ons.ready(function() {
    console.log("Onsen UI is ready!");


  });

    document.addEventListener('prechange', function(event) {
      document.querySelector('ons-toolbar .center')
        .innerHTML = event.tabItem.getAttribute('label');
    });