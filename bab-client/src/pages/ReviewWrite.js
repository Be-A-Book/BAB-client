import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import "react-toastify/dist/ReactToastify.css";
import "../css/ReviewWrite.css";

const ReviewWrite = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  // const multer = require("multer");
  // const upload = multer({ dest: "uploads/" });
  // const express = require("express");
  // const app = express();

  // app.post("/review", function (req, res) {
  //   res.send("업로드 성공!");
  // });

  // app.post("/review", upload.single("image"), function (req, res) {
  //   res.send("Uploaded! : " + req.file); // object를 리턴함
  //   console.log(req.file); // 콘솔(터미널)을 통해서 req.file Object 내용 확인 가능.
  // });

  const submit = async (values) => {
    console.log(values.store);

    const value = values || {};

    await axios({
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
  };

  const anotherInfo = async (values) => {
    const value = values || {};

    await axios
      .get(`/api/bookstore/search?keyword=${name}`)
      .then((response) => {
        value.store = response.data.bookstore[0]._id;
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {});

    await axios
      .get(`/api/users/auth`)
      .then((response) => {
        //console.log("authInfo의 ID: " + response.data._id);
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
                // console.log(data);
                anotherInfo(data);

                // console.log(data.content);
                //submit(data);
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
                    <form
                      action="/review"
                      method="post"
                      enctype="multipart/form-data"
                    >
                      <input
                        type="file"
                        name="image"
                        id="write-image"
                        alt="사진"
                        //onChange={(e) => {setFileValue("file", e.currentTarget.files[0])}}
                      />
                    </form>
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
