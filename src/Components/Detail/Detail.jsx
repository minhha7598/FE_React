import React from "react";
import ReactDOM from "react-dom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "reactstrap";
import "./Detail.scss";

const Detail = ({ isShowingDetail, hide, detail }) =>
  isShowingDetail
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="Detail">
            <label className="label__detail">Detail Employee</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button
              type="button"
              className="modal-close-button"
              data-dismiss="modal"
              aria-label="Close"
              onClick={hide}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <div className="detail__form">
              <img
                src={require("../../assets/img/" + detail.ten_anh)}
                alt={detail.ten_anh}
                className="ava__detail"
              />
              <Table
                bordered
                className="detail__table"
                style={{ width: "100%", color: "white" }}
              >
                <thead>
                  <tr className="title__detail__table">
                    <th>DETAIL</th>
                    <th>INFORMATION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>{detail.ho_ten}</th>
                  </tr>
                  <tr>
                    <th>Birth Date</th>
                    <th>{detail.ngay_sinh}</th>
                  </tr>
                  <tr>
                    <th>Sex</th>
                    <th>{detail.gioi_tinh}</th>
                  </tr>
                  <tr>
                    <th>Ethnic</th>
                    <th>{detail.dan_toc}</th>
                  </tr>
                  <tr>
                    <th>Phone Number</th>
                    <th>{detail.so_dien_thoai}</th>
                  </tr>
                  <tr>
                    <th>Home Town</th>
                    <th>{detail.que_quan}</th>
                  </tr>
                  <tr>
                    <th>Address</th>
                    <th>{detail.dia_chi}</th>
                  </tr>
                  <tr>
                    <th>College</th>
                    <th>{detail.truong}</th>
                  </tr>
                  <tr>
                    <th>Major</th>
                    <th>{detail.chuyen_nganh}</th>
                  </tr>
                  <tr>
                    <th>Level</th>
                    <th>{detail.trinh_do_hoc_van}</th>
                  </tr>
                  <tr>
                    <th>Position</th>
                    <th>{detail.ten_chuc_vu}</th>
                  </tr>
                  <tr>
                    <th>Salary Level</th>
                    <th>{detail.he_so_luong}</th>
                  </tr>
                  <tr>
                    <th>Salary</th>
                    <th>{detail.luong_co_ban}</th>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Detail;
