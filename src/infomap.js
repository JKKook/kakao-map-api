// 지도 좌표 생성
// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
const mapTypeControl = new kakao.maps.MapTypeControl();
// 지도 타입 컨트롤을 지도에 표시합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

export function getInfo() {
  // 지도의 현재 중심좌표를 얻어옵니다
  const center = map.getCenter();

  // 지도의 현재 레벨을 얻어옵니다
  const level = map.getLevel();

  // 지도타입을 얻어옵니다
  const mapTypeId = map.getMapTypeId();

  // 지도의 현재 영역을 얻어옵니다
  const bounds = map.getBounds();

  // 영역의 남서쪽 좌표를 얻어옵니다
  const swLatLng = bounds.getSouthWest();

  // 영역의 북동쪽 좌표를 얻어옵니다
  const neLatLng = bounds.getNorthEast();

  // 영역정보를 문자열로 얻어옵니다. ((남,서), (북,동)) 형식입니다
  const boundsStr = bounds.toString();
  //   console.log(boundsStr);

  const message = "지도 중심좌표는 위도 " + center.getLat() + ", <br>";
  message += "경도 " + center.getLng() + " 이고 <br>";
  message += "지도 레벨은 " + level + " 입니다 <br> <br>";
  message += "지도 타입은 " + mapTypeId + " 이고 <br> ";
  message +=
    "지도의 남서쪽 좌표는 " +
    swLatLng.getLat() +
    ", " +
    swLatLng.getLng() +
    " 이고 <br>";
  message +=
    "북동쪽 좌표는 " + neLatLng.getLat() + ", " + neLatLng.getLng() + " 입니다";
}
