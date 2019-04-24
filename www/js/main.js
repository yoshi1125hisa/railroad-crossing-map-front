    ons.ready(function() {
      console.log("Onsen UI is ready!");

      if (ons.platform.isIPhoneX()) { // iPhone X であるか否かを判定
        // <html> 要素に属性を追加（値として空文字列を設定）
        document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
        document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
      }
    });

    