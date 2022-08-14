import React, { useState, useEffect } from "react";
import GuestBookMemo from "../components/GuestbookMemo";
import "../css/Guestbook.css";
import reviewBook from "../img/review_book.png";
import axios from "axios";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { Formik } from "formik";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const GuestBook = (props) => {
  const navigate = useNavigate();
  const isLogin = props.props;
  const [currentPage, setCurrentPage] = useState(1);
  const [guestbook, setGuestbook] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: `https://beabook-server.herokuapp.com/api/users/auth`,
    }).then((response) => {
      setId(response.data._id);
    });
  }, []);

  const showToast = () => {
    toast.info(<div className="toast">첫 페이지입니다.</div>, {
      position: "bottom-center",
      autoClose: 2000,
      closeOnClick: true,
      hideProgressBar: true,
    });
  };

  useEffect(() => {
    axios({
      method: "get",
      url: `https://beabook-server.herokuapp.com/api/guestbook/getmessages?page=${currentPage}`,
    }).then((response) => {
      if (response.data.success) {
        setGuestbook(response.data.messages);
      } else {
      }
    });
  }, [currentPage]);

  const submit = async (values) => {
    if (isLogin === false) {
      toast.error(<div className="toast">로그인을 먼저 해 주세요</div>, {
        position: "top-center",
        autoClose: 2000,
      });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      const { content } = values || {};
      axios({
        method: "post",
        url: `https://beabook-server.herokuapp.com/api/guestbook/postMessage`,
        data: {
          message: content,
          writer: id,
        },
      }).then((response) => {
        if (response.data.success === true) {
          console.log(response.data);
          toast.success(
            <div className="toast">방명록이 정상적으로 등록되었습니다!</div>,
            {
              position: "top-center",
              autoClose: 2000,
            }
          );
        } else {
          console.log(response.data);
          toast.error(
            <div className="toast">방명록 등록에 실패하였어요 😭</div>,
            {
              position: "top-center",
            }
          );
        }
      });
    }
  };

  return (
    <Formik
      initialValues={{
        content: "",
        writer: "",
      }}
      onSubmit={submit}
    >
      {({ values, handleSubmit, handleChange }) => (
        <div className="guestbook">
          <div className="guestbook-title">누군가의 흔적</div>
          <div className="guestbook-write">
            <ToastContainer />
            <form onSubmit={handleSubmit}>
              <textarea
                type="content"
                name="content"
                id="guestbook-write-input"
                placeholder="공백 포함 180자까지 작성 가능"
                value={values.content}
                onChange={handleChange}
              />
              <button type="submit" className="guestbook-write-button">
                <FaPencilAlt className="guestbook-write-button-icon" />
                <div className="guestbook-write-button-text">등록</div>
              </button>
            </form>
          </div>
          <div className="guestbook-container">
            <img alt="리뷰" src={reviewBook} width="90%" height="680px" />
            {guestbook && guestbook.length > 0 && (
              <div className="all-memo">
                <div className="guestbook-container-memo-left">
                  <GuestBookMemo data={guestbook[0]} />
                  <GuestBookMemo data={guestbook[1]} />
                  <GuestBookMemo data={guestbook[2]} />
                  <GuestBookMemo data={guestbook[3]} />
                </div>

                <div className="guestbook-container-memo-right">
                  <GuestBookMemo data={guestbook[4]} />
                  <GuestBookMemo data={guestbook[5]} />
                  <GuestBookMemo data={guestbook[6]} />
                  <GuestBookMemo data={guestbook[7]} />
                </div>
              </div>
            )}

            <div className="guestbook-arrow-keys">
              {/* 왼쪽 방향키 */}
              <button
                className="guestbook-left-button"
                onClick={() =>
                  currentPage > 1
                    ? setCurrentPage(currentPage - 1)
                    : showToast()
                }
              >
                <AiFillCaretLeft className="guestbook-left-button-icon" />
                <div className="guestbook-left-button-text">이전</div>
              </button>
              {/* 오른쪽 방향키 */}
              <button
                className="guestbook-right-button"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                <div className="guestbook-right-button-text">다음</div>
                <AiFillCaretRight className="guestbook-right-button-icon" />
              </button>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default GuestBook;
