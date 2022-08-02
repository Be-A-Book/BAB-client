import React, { Component } from "react";
import "../css/FavoriteBookstore.css";
import axios from "axios";

// class FavoriteBookstore extends Component {
//   state = {
//     arr: [],
//   };

//   getMyData = async () => {
//     let retData = await axios.get(
//       "/api/users/getUserInfo/62b5efe8bf450852ff3d2389"
//     );
//     retData = retData.data.userInfo;
//     this.setState({ arr: retData });
//   };

//   componentDidMount() {
//     this.getMyData();
//   }

// useEffect(() => {
//   axios({
//     method: "get",
//     url: `/api/users/getUserInfo/62b5efe8bf450852ff3d2389`,
//   }).then((response) => {
//     if (response.data.success) {
//       console.log("불러오기");
//       setFavorite(response.data);
//       console.log(favorite.userInfo.favorites);
//     } else {
//       console.log("불러오기 실패");
//     }
//   });
// }, []);

//   render() {
//     return (
//       <div>
//         {this.state.arr.map((el) => (
//           <div className="FavoriteBookstore">
//             <div
//               className="favorite-bookstore-name"
//               key={el.userInfo.favorites._id}
//             >
//               {el.userInfo.favorites.store.name}
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

const FavoriteBookstore = ({ data }) => {
  console.log(data.store?.name);
  return (
    <>
      <div className="FavoriteBookstore">
        <div className="favorite-bookstore-name">{data.store?.name}</div>
        {/* <div className="favorite-bookstore-name">ㅁㅁ서점</div>
        <div className="favorite-bookstore-name">ㅎㅎ서점</div> */}
      </div>
    </>
  );
};

export default FavoriteBookstore;
