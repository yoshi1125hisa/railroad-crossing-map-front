let infoWindow = []

const REQUEST_URL = "https://api.rc-map.com/v1/all.json"

// 空白部分を避けるコードを書く
// for (let i = 0; i < locations.length; i++) {
//     if (locations[i].lat === "" || locations[i].lng === "") {
//         locations[i].lat = 0
//         locations[i].lng = 0
//     }
//     locations[i].lat = parseFloat(locations[i].lat, 10);
//     locations[i].lng = parseFloat(locations[i].lng, 10);
// }

let map;
// Styleのオプション（名前非表示など）
const styleOptions = [{
    featureType: 'all',
    elementType: 'labels',
    stylers: [{
        visibility: 'off'
    }]
}];

let markers;
let bounds;

async function getJsonData(url) {
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData;
}

function initMap() {
    getJsonData(REQUEST_URL).then(function (locations) {
        // 地図の作成
        let mapInfo = new google.maps.LatLng({
            lat: locations[0]['lat'],
            lng: locations[0]['lng']
        });

        let mapOption = {
            center: mapInfo,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoom: 11
        }

        // 緯度経度のデータ作成
        map = new google.maps.Map(document.getElementById('map'), mapOption);

        // map.data.loadGeoJson("../../src/N02-18_RailroadSection.geojson"); // 路線図
        // map.data.loadGeoJson("../src/N02-18_Station.geojson"); // 駅でーた
        // map.data.setStyle(function (feature) {
        //     return ({
        //         strokeColor: "#0000ff",
        //         strokeWeight: 2,
        //         zIndex: 1
        //     });
        // });

        const mapType = new google.maps.StyledMapType(styleOptions);
        map.mapTypes.set('noText', mapType);
        map.setMapTypeId('noText');

        markers = locations.map(
            function (locations, i) {
                return new google.maps.Marker({
                    // map: map,
                    // マーカークラスタ使用時は削除
                    position: locations,
                    animation: google.maps.Animation.DROP,
                    // ラベルの表示(今回はInfoWindowがあるためなしでもOK？)
                    // label: locations.rc_name,
                    icon: {
                        url: 'img/icon/humikiri.svg',
                        scaledSize: new google.maps.Size(48, 48)
                    }
                });
            });

        for (let i = 0; i < locations.length; i++) {

            let kana = locations[i]['rc_kana'];
            let name = locations[i]['rc_name'];

            // div要素の作成
            let infoWindowElement = document.createElement('div');
            // add class
            infoWindowElement.setAttribute('class', 'map');

            let kanaElement = document.createElement('p');
            kanaElement.textContent = kana;

            let nameElement = document.createElement('h1');
            nameElement.textContent = name;

            let datailButtonElement = document.createElement('ons-button');
            datailButtonElement.setAttribute('modifier', 'quiet');
            datailButtonElement.setAttribute('id', 'datail');
            datailButtonElement.setAttribute('onclick', 'alert(1)');
            datailButtonElement.textContent = '詳細を見る';

            infoWindowElement.appendChild(kanaElement);
            infoWindowElement.appendChild(nameElement);
            infoWindowElement.appendChild(datailButtonElement);

            infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
                content: infoWindowElement // 吹き出しに表示する内容
            });
            markerEvent(i); // マーカーにクリックイベントを追加
            function markerEvent(i) {
                markers[i].addListener('click', function () { // マーカーをクリックしたとき
                    // クリックされたマーカーの情報を保持
                    infoWindow[i].open(map, markers[i]); // 吹き出しの表示
                    // 前のマーカーを消す
                });
            }
        }

        const markerCluster = new MarkerClusterer(map, markers, {
            imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
        });
        // Geolocation APIに対応している
        if (navigator.geolocation) {
            getPosition();
            // alert("この端末では位置情報が取得できます");
            // Geolocation APIに対応していない
        } else {
            // alert("この端末では位置情報が取得できません");
        }
    }).catch(function (e) {
        console.log(e);
    });
}

// 現在地取得処理
function getPosition() {
    // 現在地を取得
    navigator.geolocation.getCurrentPosition(
        // 取得成功した場合
        function (position) {
            // alert("緯度:" + position.coords.latitude + ",経度" + position.coords.longitude);
            let nowLat = position.coords.latitude;
            let nowLng = position.coords.longitude;
            map.panTo(new google.maps.LatLng(nowLat, nowLng));
            map.setZoom(13);
        },
        // 取得失敗した場合
        function (error) {
            switch (error.code) {
                case 1: //PERMISSION_DENIED
                    alert("位置情報の利用が許可されていません");
                    break;
                case 2: //POSITION_UNAVAILABLE
                    alert("現在位置が取得できませんでした");
                    break;
                case 3: //TIMEOUT
                    alert("タイムアウトになりました");
                    break;
                default:
                    alert("その他のエラー(エラーコード:" + error.code + ")");
                    break;
            }
        }
    );
}


let showLoadingDialog = function () {
    let loadingDialog = document.getElementById('loading-dialog');

    if (loadingDialog) {
        loadingDialog.show();
    } else {
        ons.createElement('loading-dialog.html', {
            append: true
        })
            .then(function (loadingDialog) {
                loadingDialog.show();
            });
    }
};

let hideLoadingDialog = function (id) {
    document
        .getElementById(id)
        .hide();
};

// Ajex通信用の関数/

// async function getMapData() {
//     return await (await fetch(REQUEST_URL)).json();
// }

// getMapData()
//     .then(data => {
//         console.log(JSON.stringify(data));
//         // const pinLocation = JSON.stringify(data);
//         // 地図のデータを読み込む処理
//     }).catch(err => {
//         console.log(err);
//     })

const getNowLocation = function getNowLocation() {
    getPosition();
}
