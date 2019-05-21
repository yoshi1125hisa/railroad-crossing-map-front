// eslint-disable-next-line no-undef
if (ons.platform.isIPhoneX()) { // iPhone X であるか否かを判定
  // <html> 要素に属性を追加（値として空文字列を設定）
  document.documentElement.setAttribute('onsflag-iphonex-portrait', '') // 縦
  document.documentElement.setAttribute('onsflag-iphonex-landscape', '') // 横
}

 // eslint-disable-next-line no-undef
 ons.ready(function () {
       console.log('Onsen UI is ready!')
 })

document.addEventListener('prechange', function (event) {
  document.querySelector('ons-toolbar .center').innerHTML = event.tabItem.getAttribute('label')
})

// 画面リロード
let refreshView = function () {
  console.log("Hello world!");
  location.reload();
}