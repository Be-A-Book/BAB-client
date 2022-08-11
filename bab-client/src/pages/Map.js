import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/Map.css";
import mapMarker from "../img/map_marker.png";
const { kakao } = window;

const Map = () => {
  const [markers, setMarker] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      method: "get",
      url: `/api/bookstore/getMapMarker`,
    }).then((response) => {
      if (response.data.success) {
        setMarker(response.data.bookstore);
        //console.log(response.data.bookstore);
      } else {
        console.log("불러오기 실패");
      }
    });
  }, []);

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.5550831, 126.932516), //37.5550831, 126.932516
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

    markers &&
      markers.map((el) => {
        //content
        const content =
          '<div class="markerbox-wrap">' +
          ' <div class="markerbox-info">' +
          '   <div class="markerbox-image">' +
          '     <img class="markerbox-bookstore-image" src=' +
          el.defaultImage +
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
        // console.log(`${el.defaultImage}`);
        //마커 생성
        const marker = new kakao.maps.Marker({
          //마커가 표시 될 지도
          map: map,
          //마커가 표시 될 위치
          position: new kakao.maps.LatLng(el.lat, el.lng),
          image: markerImage, //마커이미지 설정
        });
        marker.id = el._id;

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

        kakao.maps.event.addListener(marker, "click", function () {
          onClick();
        });

        function closeOverlay() {
          mapCustomOverlay.setMap(null);
        }

        function onClick() {
          navigate("/detail", {
            state: { data: marker.id }, //markers[0]
          });
        }
      });
  });

  return (
    <>
      <div id="map" className="Map"></div>
    </>
  );
};

export default Map;
