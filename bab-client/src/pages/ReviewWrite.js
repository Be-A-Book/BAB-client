import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import "react-toastify/dist/ReactToastify.css";
import "../css/ReviewWrite.css";

const ReviewWrite = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const submit = async (values) => {
    console.log(values);

    const value = values || {};

    console.log(value);

    if (
      value.store === "62e9a3bd6da7cf12cf5f9dfc" &&
      value.writer === "62c463f3313ec73353f5f35d"
    ) {
      axios({
        method: "post",
        url: `api/review/postReview`,
        data: {
          store: value.store,
          writer: value.writer, //"62dd295807f7364fbf4cd395"
          content: value.content,
        },
        //   headers: {'Content-Type': 'multipart/form-data' }
      }).then((response) => {
        if (response.data.success) {
          console.log(value.content);
          //console.log(response.data);
          toast.success(<div>리뷰 작성이 완료되었습니다.</div>, {
            position: "bottom-center",
            autoClose: 2000,
            closeOnClick: true,
            hideProgressBar: true,
          });
          navigate("/review");
        } else {
          //console.log(value.content);
          console.log(response.data);
          toast.error(<div>리뷰 작성에 실패하였습니다.</div>, {
            position: "bottom-center",
            autoClose: 2000,
            closeOnClick: true,
            hideProgressBar: true,
          });
        }
      });
    }
  };

  const anotherInfo = (values) => {
    const value = values || {};

    axios
      .get(`/api/bookstore/search?keyword=${name}`)
      .then((response) => {
        value.store = response.data.bookstore[0]._id;
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {});

    axios
      .get(`/api/users/auth`)
      .then((response) => {
        console.log("authInfo의 ID: " + response.data._id);
        value.writer = response.data._id;
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {});
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
                console.log(data);
                setSubmitting(false);
                submit(data);
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
                    <div className="write-text-title">서점 주소</div>
                    <input type="text" name="address" id="write-address" />
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
                      type="image"
                      name="image"
                      id="write-image"
                      alt="사진"
                    />
                  </div>
                  <div className="write-text-container">
                    <div className="write-text-title">서점 키워드</div>
                    <input type="text" name="tags" id="write-tags" />
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
