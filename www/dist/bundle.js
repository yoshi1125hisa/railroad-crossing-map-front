(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

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

// お問い合わせ画面への遷移 (Cordovaプラグインを使ってアプリ版は別ブラウザで起動できるようにする)
// https://github.com/apache/cordova-plugin-inappbrowser （未実装）
let contact = function () {
  window.open("https://www.yoshi1125hisa.com/");
}

let privacyPolicy = function () {
  window.open("https://www.yoshi1125hisa.com/");
}

let oss = function () {
  window.open("https://www.yoshi1125hisa.com/");
}

let lisence = function () {
  window.open("https://www.yoshi1125hisa.com/");
}

},{}]},{},[1]);
