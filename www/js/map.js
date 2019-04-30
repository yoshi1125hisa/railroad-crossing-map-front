let map;
let marker = [];
let infoWindow = [];
let markerData = [ // マーカーを立てる場所名・緯度・経度
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
let mapLatLng = new google.maps.LatLng({lat: markerData[0]['lat'], lng: markerData[0]['lng']}); // 緯度経度のデータ作成
map = new google.maps.Map(document.getElementById('map'), { // #mapに地図を埋め込む
center: mapLatLng, // 地図の中心を指定
zoom: 15 // 地図のズームを指定
});

let styleOptions = [{
  featureType: 'all',
  elementType: 'labels',
  stylers: [{ visibility: 'off' }]
}];

let lopanType = new google.maps.StyledMapType(styleOptions);

map.mapTypes.set('noText', lopanType);
map.setMapTypeId('noText');

// マーカー毎の処理
for (let i = 0; i < markerData.length; i++) {
  markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
  marker[i] = new google.maps.Marker({ // マーカーの追加
   position: markerLatLng, // マーカーを立てる位置を指定
      map: map, // マーカーを立てる地図を指定
      icon: {
        url: 'img/humikiri.png'
      }
 });

infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
   content: '<div class="map">' + '<h1>' + markerData[i]['name'] + '</h1>' + markerData[i]['yomi'] +'</div>' // 吹き出しに表示する内容
 });

markerEvent(i); // マーカーにクリックイベントを追加

}

// marker[].setOptions({
//   icon: {
//    url: markerData[0]['icon']// マーカーの画像を変更
//  }
// });

}

// マーカーにクリックイベントを追加
function markerEvent(i) {
marker[i].addListener('click', function() { // マーカーをクリックしたとき
infoWindow[i].open(map, marker[i]); // 吹き出しの表示
});
}
