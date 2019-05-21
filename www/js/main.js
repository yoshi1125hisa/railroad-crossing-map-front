if (ons.platform.isIPhoneX()) { // iPhone X であるか否かを判定
  // <html> 要素に属性を追加（値として空文字列を設定）
  document.documentElement.setAttribute('onsflag-iphonex-portrait', '') // 縦
  document.documentElement.setAttribute('onsflag-iphonex-landscape', '') // 横
}

ons.ready(function () {
  console.log('Onsen UI is ready!')
})

document.addEventListener('prechange', function (event) {
  document.querySelector('ons-toolbar .center').innerHTML = event.tabItem.getAttribute('label')
})

// 画面リロード
let refreshView = function () {
  // trueを引数にすることで、WEBサーバーの生データを取得する。 falseではキャッシュから取得。
  location.reload(true);
}