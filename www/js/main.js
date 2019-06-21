'use strict';

// Android UI (Material)に固定
// ons.forcePlatformStyling('android');

document.addEventListener('deviceready', function () {
  navigator.splashscreen.hide();
}, false);

if (ons.platform.isIPhoneX()) { // iPhone X であるか否かを判定
  // <html> 要素に属性を追加（値として空文字列を設定）
  document.documentElement.setAttribute('onsflag-iphonex-portrait', '') // 縦
  document.documentElement.setAttribute('onsflag-iphonex-landscape', '') // 横
}

document.addEventListener('prechange', function (event) {
  document.querySelector('ons-toolbar .toolbar__center').innerHTML = event.tabItem.getAttribute('label');
})

// 画面リロード
window.refreshView = function refreshView() {
  // trueを引数にすることで、WEBサーバーの生データを取得する。 falseではキャッシュから取得。
  location.reload(true);
  // initMap();
}

// お問い合わせ画面への遷移 (Cordovaプラグインを使ってアプリ版は別ブラウザで起動できるようにする)
// https://github.com/apache/cordova-plugin-inappbrowser （未実装）
window.contact = function contact() {
  window.open("https://www.yoshi1125hisa.com/");
}

window.privacyPolicy = function privacyPolicy() {
  window.open("https://www.yoshi1125hisa.com/");
}

window.oss = function oss() {
  window.open("https://www.yoshi1125hisa.com/");
}

window.lisence = function lisence() {
  window.open("https://raw.githubusercontent.com/yoshi1125hisa/rc-map_front/develop/LICENSE");
}

let showTemplateDialog = function showTemplateDialog() {
  let dialog = document.getElementById('first-dialog');

  if (dialog) {
    dialog.show();
  } else {
    ons.createElement('dialog.html', {
        append: true
      })
      .then(function (dialog) {
        dialog.show();
      });
  }
};

let hideDialog = function hideDialog(id) {
  document
    .getElementById(id)
    .hide();
};
