# kakao-map-api
<h3>카카오 지도 API 사용해보기</h3>

https://apis.map.kakao.com/web/

#### 1.지도 줌 컨트롤 생성 <br>
ZoomControl() : 메서드를 호출해서 사용자로 하여금 지도 컨트롤 레벨을 직접 조절할 수 있게 UI구현

#### 2.마커, 인포윈도우, 클러스터러 생성 <br>
1) const datas = [좌표(x, y), 좌표 관련 내용] <br>
2) const markers = [datas[i][0], datas[i][1]]; <br>
3) const infowindow = [datas[i][2]] <br>

#### 3.마커 마우스 이벤트 등록 <br>
makeOverListner(map, marker, infowindow) : 메서드를 호출해서 mouseover에 따른 이벤트 형성 <br>
addListener(maker, "mouseover / mouseout", makeOverListner)<br>

#### 4.지도 좌표 생성 및 스카이뷰 타입 전환 컨트롤 생성 <br>
MapTypeControl() : 메서드를 호출해서 지도 타입을 전환 할 수 있도록 컨트롤 생성

![image](https://user-images.githubusercontent.com/104504666/208410755-8a614edb-d92c-4bb4-ac5c-add55245a9ec.png)
