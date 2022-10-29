import React from "react";
import ReactDOM from "react-dom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Edit.scss";

const Edit = ({
  handleEditFormChange,
  handleEditFormSubmit,
  isShowingEdit,
  hide,
  successEdit,
  data,
}) =>
  isShowingEdit
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="Edit">
            <label className="label__edit">Update Employee</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button
              type="button"
              className="modal-close-button"
              data-dismiss="modal"
              aria-label="Close"
              onClick={hide}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <label className="notice__edit">
              Select the field that needs to be updated!
            </label>
            <hr />
            <form
              onSubmit={(event) => handleEditFormSubmit(event, data.id)}
              encType="multipart/form-data"
            >
              <input
                type="text"
                name="fullName"
                onChange={handleEditFormChange}
                placeholder={data.ho_ten}
              />
              <input
                type="text"
                name="birthDate"
                onChange={handleEditFormChange}
                placeholder={data.ngay_sinh}
              />
              <input
                type="text"
                name="sex"
                onChange={handleEditFormChange}
                placeholder={data.gioi_tinh}
              />
              <input
                type="text"
                name="ethnic"
                placeholder={data.dan_toc}
                onChange={handleEditFormChange}
              />
              <input
                type="text"
                name="phoneNumber"
                onChange={handleEditFormChange}
                placeholder={data.so_dien_thoai}
              />
              <input
                type="text"
                name="homeTown"
                placeholder={data.que_quan}
                onChange={handleEditFormChange}
              />
              <input
                type="text"
                name="address"
                onChange={handleEditFormChange}
                placeholder={data.dia_chi}
              />
              <input
                type="text"
                name="college"
                placeholder={data.truong}
                onChange={handleEditFormChange}
              />
              <br />
              <input
                type="text"
                name="major"
                placeholder={data.chuyen_nganh}
                onChange={handleEditFormChange}
              />
              <br />
              <input
                type="text"
                name="level"
                placeholder={data.trinh_do_hoc_van}
                onChange={handleEditFormChange}
              />
              <br />
              <input
                type="text"
                name="position"
                placeholder={data.ten_chuc_vu}
                onChange={handleEditFormChange}
              />
              <br />
              <input
                type="text"
                name="salaryLevel"
                placeholder={data.he_so_luong}
                onChange={handleEditFormChange}
              />
              <br />
              <input
                type="text"
                name="salary"
                placeholder={data.luong_co_ban}
                onChange={handleEditFormChange}
              />
              <br />
              <input type="file" onChange={handleEditFormChange} />
              <br />
              <button type="submit">Save</button>
            </form>
            <div className="success">
              {successEdit === true ? "Saved Successfully!" : false}
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Edit;
