import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Map.css";
import { markerdata } from "../data/markerData";
import mapMarker from "../img/map_marker.png";
const { kakao } = window;

const Map = () => {
  const [bookStore, setBookStore] = useState("");

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.555206675339164, 126.93689191198305),
      level: 3,
    };

    //map
    const map = new kakao.maps.Map(container, options);

    const imageSrc = mapMarker, // 마커이미지 주소
      imageSize = new kakao.maps.Size(20, 60), // 마커이미지 크기
      imageOption = { offset: new kakao.maps.Point(17, 54) };
    const markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );

    markerdata.forEach((el) => {
      //content
      const content =
        '<div class="markerbox-wrap">' +
        ' <div class="markerbox-info">' +
        '   <div class="markerbox-image">' +
        '     <img class="markerbox-bookstore-image" src=' +
        el.image +
        ' alt="사진" width="100%" height="110vh"/>' +
        " </div>" +
        '   <div class="markerbox-tags">' +
        el.tags +
        "</div>" +
        '   <div class="markerbox-name">' +
        el.name +
        "</div>" +
        "</div>" +
        "</div>";

      //마커 생성
      const marker = new kakao.maps.Marker({
        //마커가 표시 될 지도
        map: map,
        //마커가 표시 될 위치
        position: new kakao.maps.LatLng(el.lat, el.lng),
        image: markerImage, //마커이미지 설정
      });

      //---------------수정한 부분 시작------------------
      // 커스텀 오버레이 생성
      const mapCustomOverlay = new kakao.maps.CustomOverlay({
        content: content,
        map: map,
        position: marker.getPosition(),
      });

      mapCustomOverlay.setMap(null);

      kakao.maps.event.addListener(marker, "mouseover", function () {
        mapCustomOverlay.setMap(map);
      });

      kakao.maps.event.addListener(marker, "mouseout", function () {
        closeOverlay();
      });

      function closeOverlay() {
        mapCustomOverlay.setMap(null);
      }

      //------------------------------------------------

      // 마커에 표시할 인포윈도우 생성
      // const infowindow = new kakao.maps.InfoWindow({
      //   content: content, // 인포윈도우에 표시할 내용
      // });

      // 인포윈도우 표시하는 클로저
      // kakao.maps.event.addListener(
      //   marker,
      //   "mouseover",
      //   makeOverListener(map, marker, infowindow)
      // );
      // 인포윈도우 닫는 클로저
      // kakao.maps.event.addListener(
      //   marker,
      //   "mouseout",
      //   makeOutListener(infowindow)
      // );
    });

    // function makeOverListener(map, marker, infowindow) {
    //   return function () {
    //     infowindow.open(map, marker);
    //   };
    // }

    // function makeOutListener(infowindow) {
    //   return function () {
    //     infowindow.close();
    //   };
    // }
  }, []);

  const getDetails = (data) => {
    //BookStore는 검색어... 같은 느낌이야, 전체를 다 불러올 때는 필요가 없어
    axios.get(`API_ENDPOINT + '/bookstore/${data}`).then((response) => {
      //ENDPOINT 포트이름 변수 + 내가 요청할 주소
      if (response.data.success) {
        setBookStore(response.data);
        console.log("불러오기");
      } else {
        console.log("불러오기 실패");
      }
    });
  };

  return (
    <>
      <div id="map" className="Map">
        {bookStore.name}
      </div>
    </>
  );
};

export default Map;
