import React from "react";
import ReactDOM from "react-dom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Mail.scss";

const Mail = ({
  handleMailFormChange,
  handleMailFormSubmit,
  successMail,
  isShowingMail,
  hide,
}) =>
  isShowingMail
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="Mail">
            <label className="label__mail">SEND EMAIL </label>
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
            <hr />
            <form onSubmit={handleMailFormSubmit}>
              <input
                type="text"
                name="email"
                required="required"
                placeholder="Enter email..."
                onChange={handleMailFormChange}
              />
              <br />
              <input
                type="text"
                name="title"
                required="required"
                placeholder="Enter Title..."
                onChange={handleMailFormChange}
              />
              <br />
              <input
                type="textarea"
                name="content"
                required="required"
                placeholder="Enter Content..."
                onChange={handleMailFormChange}
              />
              <br />
              <button type="submit">Send</button>
            </form>
            <div className="success">
              {successMail === true ? "Successfully Sent!" : false}
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Mail;
