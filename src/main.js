"use strict";

// 지도 api를 받아 오는 곳
const mapContainer = document.getElementById("map"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(37.505818168, 126.753112053), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
    mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도종류
  };

// 지도를 생성한다
const map = new kakao.maps.Map(mapContainer, mapOption);



// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
const zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// 마커 클러스터러를 생성합니다
const clusterer = new kakao.maps.MarkerClusterer({
  map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
  averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
  minLevel: 10, // 클러스터 할 최소 지도 레벨
});

// 좌표 정보, 좌표 관련 내용(인포윈도우)
const datas = [
  [37.505818168, 126.753112053, '<div style="padding:5px">상동역</div>'],
  [37.5047, 126.7572, '<div style="padding:5px;">뉴코아아울렛 부천</div>'],
  [37.5043, 126.762, '<div style="padding:5px;">현대백화점 중동점</div>'],
  [37.5026, 126.7752, '<div style="padding:5px;">롯데백화점 중동점</div>'],
];

//
const markers = [];

for (let i = 0; i < datas.length; i++) {
  // 지도에 마커를 생성하고 표시한다
  const marker = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(datas[i][0], datas[i][1]), // 마커의 좌표
    map: map, // 마커를 표시할 지도 객체
  });

  // 마커 위에 표시할 인포윈도우를 생성한다
  const infowindow = new kakao.maps.InfoWindow({
    content: datas[i][2], // 인포윈도우에 표시할 내용
  });

  // 인포윈도우를 지도에 표시한다
  infowindow.open(map, marker);
  markers.push(marker);
  // 인포윈도우 mouseEvent
  kakao.maps.event.addListener(marker, "mouseout", makeOutListener(infowindow));
  kakao.maps.event.addListener(
    marker,
    "mouseover",
    makeOverListener(map, marker, infowindow)
  );
}

// 클러스터리에 마커를 추가
// addMarkers는 j-query 라이브러리임!
clusterer.addMarkers(markers);

// 인포윈도우를 표시하는 클로저를 만드는 함수입니다
function makeOverListener(map, marker, infowindow) {
  return function () {
    infowindow.open(map, marker);
  };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다
function makeOutListener(infowindow) {
  return function () {
    infowindow.close();
  };
}
