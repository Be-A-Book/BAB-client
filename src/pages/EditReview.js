import axios from "axios";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import "react-toastify/dist/ReactToastify.css";
import "../css/ReviewWrite.css";

const EditReview = () => {
  const location = useLocation();
  const data = location.state.element;

  const navigate = useNavigate();

  const submit = async (values) => {
    const value = values || {};

    const frm = new FormData();
    frm.append("content", value.content);

    axios({
      method: "put",
      url: `https://beabook-server.herokuapp.com/api/review/postReview/${data}`,
      data: {
        content: value.content,
      },
    }).then((response) => {
      if (response.data.success) {
        toast.success(<div>리뷰 수정이 완료되었습니다.</div>, {
          position: "bottom-center",
          autoClose: 2000,
          pauseOnFocusLoss: false,
          closeOnClick: true,
          hideProgressBar: true,
        });
        navigate("/review");
      } else {
        console.log(value);
        toast.error(<div>리뷰 수정에 실패하였습니다.</div>, {
          position: "bottom-center",
          autoClose: 2000,
          closeOnClick: true,
          hideProgressBar: true,
        });
      }
    });
  };

  return (
    <>
      <div className="write">
        <div className="write-book">
          <div className="write-text">
            <div className="write-text-head">Make A Review</div>
            <Formik
              initialValues={{
                content: "",
              }}
              onSubmit={(data, { setSubmitting }) => {
                setSubmitting(true);
                submit(data);
                setSubmitting(false);
              }}
            >
              {({ values, handleSubmit, handleChange, isSubmitting }) => (
                <form className="review-write-form" onSubmit={handleSubmit}>
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

export default EditReview;
