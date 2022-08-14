import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import "react-toastify/dist/ReactToastify.css";
import "../css/ReviewWrite.css";

const ReviewWrite = (props) => {
  const isLogin = props.props;
  if (isLogin === false) {
    toast.error(<div className="toast">로그인을 먼저 해 주세요</div>, {
      position: "top-center",
      autoClose: 2000,
    });
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const submit = async (values) => {
    console.log(values.store);

    const value = values || {};

    const frm = new FormData();
    const photoFile = document.getElementById("write-image");
    frm.append("image", photoFile.files[0]);
    frm.append("store", value.store);
    frm.append("writer", value.writer);
    frm.append("content", value.content);

    await axios
      .post("https://beabook-server.herokuapp.com/api/review/postReview", frm, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        if (response.data.success) {
          toast.success(<div>리뷰 작성이 완료되었습니다.</div>, {
            position: "bottom-center",
            autoClose: 2000,
            pauseOnFocusLoss: false,
            closeOnClick: true,
            hideProgressBar: true,
          });
          navigate("/review");
        } else {
          console.log(value);
          toast.error(<div>리뷰 작성에 실패하였습니다.</div>, {
            position: "bottom-center",
            autoClose: 2000,
            closeOnClick: true,
            hideProgressBar: true,
          });
        }
      });
  };

  const anotherInfo = async (values) => {
    const value = values || {};

    await axios
      .get(`https://beabook-server.herokuapp.com/api/bookstore/search?keyword=${name}`)
      .then((response) => {
        value.store = response.data.bookstore[0]._id;
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {});

    await axios
      .get(`https://beabook-server.herokuapp.com/api/users/auth`)
      .then((response) => {
        value.writer = response.data._id;
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {});

    submit(value);
  };

  return (
    <>
      <div className="write">
        <div className="write-book">
          <div className="write-text">
            <div className="write-text-head">Make A Review</div>
            <Formik
              initialValues={{
                store: "",
                writer: "",
                content: "",
              }}
              onSubmit={(data, { setSubmitting }) => {
                setSubmitting(true);
                anotherInfo(data);
                setSubmitting(false);
              }}
            >
              {({ values, handleSubmit, handleChange, isSubmitting }) => (
                <form className="review-write-form" onSubmit={handleSubmit}>
                  <div className="write-text-container">
                    <div className="write-text-title">서점 이름</div>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      id="write-name"
                    />
                  </div>
                  <div className="write-text-container">
                    <div className="write-text-title">방문 후기</div>
                    <textarea
                      type="text"
                      name="content"
                      value={values.content}
                      onChange={handleChange}
                      id="write-content"
                    />
                  </div>
                  <div className="write-text-container">
                    <div className="write-text-title">서점 사진</div>
                    <input
                      type="file"
                      name="image"
                      id="write-image"
                      alt="사진"
                    />
                  </div>
                  <button
                    className="write-submit-button"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    <div className="write-submit-button-text">제출하기</div>
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
        <ToastContainer />
        <div className="write-image-paper"></div>
        <div className="write-image-pen"></div>
      </div>
    </>
  );
};

export default ReviewWrite;
