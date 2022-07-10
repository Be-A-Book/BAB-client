import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Map.css";
const { kakao } = window;

const Map = () => {
  const [bookStore, setBookStore] = useState("");

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.555206675339164, 126.93689191198305),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    //마커가 표시 될 위치 - 이 부분은 서버 모델과 연결하는 것으로 변경
    const markerPosition = new kakao.maps.LatLng(
      37.55579240200719,
      126.9370272266829
    );

    // 마커 생성
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 지도 위에 마커 표시
    marker.setMap(map);
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
