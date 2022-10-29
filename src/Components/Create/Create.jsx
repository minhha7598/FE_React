import React from "react";
import ReactDOM from "react-dom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Create.scss";

const Create = ({
  handleAddFormChange,
  handleAddFormSubmit,
  successCreate,
  isShowing,
  hide,
}) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="Create">
            <label className="label__create">Create New Employee</label>
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
            <hr />
            <form onSubmit={handleAddFormSubmit} encType="multipart/form-data">
              <input
                type="text"
                name="fullName"
                required="required"
                placeholder="Enter Name..."
                onChange={handleAddFormChange}
              />

              <input
                type="text"
                name="birthDate"
                required="required"
                placeholder="Enter BirthDate... (YYYY-MM-DD)"
                onChange={handleAddFormChange}
              />

              <input
                type="text"
                name="sex"
                required="required"
                placeholder="Enter Sex..."
                onChange={handleAddFormChange}
              />
              <br />
              <input
                type="text"
                name="ethnic"
                required="required"
                placeholder="Enter ethnic..."
                onChange={handleAddFormChange}
              />
              <br />
              <input
                type="text"
                name="phoneNumber"
                required="required"
                placeholder="Enter Phone Number..."
                onChange={handleAddFormChange}
              />
              <br />
              <input
                type="text"
                name="homeTown"
                required="required"
                placeholder="Enter Hometown..."
                onChange={handleAddFormChange}
              />
              <br />
              <input
                type="text"
                name="address"
                required="required"
                placeholder="Enter Adress..."
                onChange={handleAddFormChange}
              />
              <br />
              <input
                type="text"
                name="college"
                required="required"
                placeholder="Enter Colleage..."
                onChange={handleAddFormChange}
              />
              <br />
              <input
                type="text"
                name="major"
                required="required"
                placeholder="Enter Major..."
                onChange={handleAddFormChange}
              />
              <br />
              <input
                type="text"
                name="level"
                required="required"
                placeholder="Level..."
                onChange={handleAddFormChange}
              />
              <br />
              <input
                type="text"
                name="position"
                required="required"
                placeholder="Position..."
                onChange={handleAddFormChange}
              />
              <br />
              <input
                type="text"
                name="salaryLevel"
                required="required"
                placeholder="Enter Salary level..."
                onChange={handleAddFormChange}
              />
              <br />
              <input
                type="text"
                name="salary"
                required="required"
                placeholder="Enter Salary..."
                onChange={handleAddFormChange}
              />
              <br />
              <input
                type="file"
                required="required"
                onChange={handleAddFormChange}
              />
              <br />
              <button type="submit">Create</button>
              <div className="success">
                {successCreate === true ? "Successfully Create!" : false}
              </div>
            </form>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Create;
