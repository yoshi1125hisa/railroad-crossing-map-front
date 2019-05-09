/* let json = require('../json.json');
console.log(json);
ローカルのJSONを読み込み */

let map;
let marker = [];
let infoWindow = [];
let locations = [
  // マーカーを立てる場所名・緯度・経度
  {
  name: '東田上',
  yomi: 'ひがしたがみ',
  lat: 34.637025,
  lng: 135.030432
  }, {
  name: '大谷上甲',
  yomi: 'おおたにがみこう',
  lat: 34.642752,
  lng: 135.024821
  }, {
  name: '離宮道',
  yomi: 'りきゅうみち',
  lat: 34.644828,
  lng: 135.121587
  }, {
  name: '茶ノ木',
  yomi: 'ちゃのき',
  lat: 34.8148524,
  lng: 134.5820931
  }
];

function initMap() {
  // 地図の作成
  let mapInfo = new google.maps.LatLng({lat: locations[0]['lat'], lng: locations[0]['lng']}); // 緯度経度のデータ作成
  map = new google.maps.Map(document.getElementById('map'), { // #mapに地図を埋め込む
  center: mapInfo, // 地図の中心を指定
  zoom: 15 // 地図のズームを指定
});

let styleOptions = [{
  featureType: 'all',
  elementType: 'labels',
  stylers: [{ visibility: 'off' }]
}];

let mapType = new google.maps.StyledMapType(styleOptions);
map.mapTypes.set('noText', mapType);
map.setMapTypeId('noText');

// マーカー毎の処理
for (let i = 0; i < locations.length; i++) {
  markerLatLng = new google.maps.LatLng({lat: locations[i]['lat'], lng: locations[i]['lng']}); // 緯度経度のデータ作成
  marker[i] = new google.maps.Marker({ // マーカーの追加
    position: markerLatLng, // マーカーを立てる位置を指定
    map: map, // マーカーを立てる地図を指定
    icon: {
      url: 'img/humikiri.png'
    }
 });

  mapContent = `<div class="map"><h1 style="margin: 0;padding: 0;">${locations[i]['name']}</h1>${locations[i]['yomi']}<br><ons-button modifier="quiet" id="datail">詳細をみる</ons-button></div>`;

infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
   content: mapContent // 吹き出しに表示する内容
 });

markerEvent(i); // マーカーにクリックイベントを追加

}

// marker[].setOptions({
//   icon: {
//    url: locations[0]['icon']// マーカーの画像を変更
//  }
// });

}

// マーカーにクリックイベントを追加
function markerEvent(i) {
  marker[i].addListener('click', function() { // マーカーをクリックしたとき
    infoWindow[i].open(map, marker[i]); // 吹き出しの表示
  });
}
