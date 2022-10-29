import React, { useState, Fragment } from "react";
import { Table, Alert } from "reactstrap";
import { useNavigate } from "react-router-dom";
import ReadOnlyRow from "../../Components/ReadOnlyRow/ReadOnlyRow";
import Edit from "../../Components/Edit/Edit";
import Header from "../../Components/Header/Header";
import NavLogin from "../../Components/NavLogin/NavLogin";
import Create from "../../Components/Create/Create";
import Detail from "../../Components/Detail/Detail";
import Mail from "../../Components/Mail/Mail";
import General from "../../Components/General/General";
import useModal from "../../ult/useModel";
import {
  faFileExcel,
  faEnvelope,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Admin.scss";
import axios from "axios";

function Admin({
  datas,
  filterItems,
  categories,
  slice,
  loadmore,
  setSearch,
  handleSearch,
  handleFreshPage,
  warning,
  setWarning,
  successCreate,
  setSuccessCreate,
  successEdit,
  setSuccessEdit,
  successMail,
  setSuccessMail,
}) {
  const navigate = useNavigate();
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    birthDate: "",
    sex: "",
    ethnic: "",
    phoneNumber: "",
    homeTown: "",
    address: "",
    college: "",
    major: "",
    level: "",
    position: "",
    salaryLevel: "",
    salary: "",
  });
  const [detail, setDetail] = useState();
  const [editFormData, setEditFormData] = useState({
    fullName: "",
    birthDate: "",
    sex: "",
    ethnic: "",
    phoneNumber: "",
    homeTown: "",
    address: "",
    college: "",
    major: "",
    level: "",
    position: "",
    salaryLevel: "",
    salary: "",
  });
  const [mailFormData, setMalFormData] = useState({
    email: "",
    title: "",
    content: "",
  });
  const { isShowing, toggle } = useModal();
  const { isShowingEdit, editToggle } = useModal();
  const { isShowingDetail, detailToggle } = useModal();
  const { isShowingMail, mailToggle } = useModal();

  const [data, setData] = useState();
  const [img, setImg] = useState();
  const [imgUpdate, setImgUpdate] = useState();
  const [excel, setExcel] = useState();

  //DETAIL
  const handleDetailClick = (event, datas) => {
    event.preventDefault();
    setDetail(datas);
    detailToggle();
  };

  //CREATE
  const handleAddFormChange = (e) => {
    e.preventDefault();
    const { files, value } = e.target;
    setAddFormData({ ...addFormData, [e.target.name]: value });
    setImg(files[0]);
  };
  const handleAddFormSubmit = (e) => {
    e.preventDefault();
    const newData = {
      ho_ten: addFormData.fullName,
      ngay_sinh: addFormData.birthDate,
      gioi_tinh: addFormData.sex,
      dan_toc: addFormData.ethnic,
      so_dien_thoai: addFormData.phoneNumber,
      que_quan: addFormData.homeTown,
      dia_chi: addFormData.address,
      truong: addFormData.college,
      chuyen_nganh: addFormData.major,
      trinh_do_hoc_van: addFormData.level,
      ten_chuc_vu: addFormData.position,
      he_so_luong: addFormData.salaryLevel,
      luong_co_ban: addFormData.salary,
      ten_anh: img,
    };
    axios
      .post("http://127.0.0.1:8000/api/admin", newData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(function () {
        setSuccessCreate(true);
        setWarning(true);
      })
      .catch(function () {
        console.log(">>> Failed Create!");
      });
  };

  //EDIT
  const handleEditClick = (e, datasID) => {
    e.preventDefault();
    setData(datasID);
    editToggle();
  };
  const handleEditFormChange = (e) => {
    e.preventDefault();
    const { files, value } = e.target;
    setEditFormData({ ...editFormData, [e.target.name]: value });
    setImgUpdate(files[0]);
  };
  const handleEditFormSubmit = (e, editDataID) => {
    e.preventDefault();
    const editedData = {
      ho_ten: editFormData.fullName,
      ngay_sinh: editFormData.birthDate,
      gioi_tinh: editFormData.sex,
      dan_toc: editFormData.ethnic,
      so_dien_thoai: editFormData.phoneNumber,
      que_quan: editFormData.homeTown,
      dia_chi: editFormData.address,
      truong: editFormData.college,
      chuyen_nganh: editFormData.major,
      trinh_do_hoc_van: editFormData.level,
      ten_chuc_vu: editFormData.position,
      he_so_luong: editFormData.salaryLevel,
      luong_co_ban: editFormData.salary,
      ten_anh: imgUpdate,
    };
    axios
      .put(`http://127.0.0.1:8000/api/admin/${editDataID}`, editedData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(function () {
        setSuccessEdit(true);
        setWarning(true);
      })
      .catch(function (err) {
        console.log("Failed Update!", err);
      });
  };

  //DELETE
  const handleDeleteClick = (datasID) => {
    axios
      .delete(`http://127.0.0.1:8000/api/admin/${datasID}`, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(function () {
        setWarning(true);
      })
      .catch(function (err) {
        console.log("Failed Delete!", err);
      });
  };

  //EXCEL
  const handleExFormChange = (e) => {
    e.preventDefault();
    const { files } = e.target;
    setExcel(files[0]);
  };
  const handleImport = (e) => {
    e.preventDefault();
    const file = { file: excel };
    axios
      .post(`http://localhost:8000/api/import`, file, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(function () {
        setWarning(true);
      })
      .catch(function (err) {
        console.log("Failed Import!", err);
      });
  };
  const handleExport = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:8000/api/export`, {
        headers: {
          "Content-Type": "blob",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        responseType: "arraybuffer",
      })
      .then(function (res) {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("data");
        link.href = url;
        link.setAttribute("download", "nhanviens.xlsx");
        document.body.appendChild(link);
        link.click();
        setWarning(true);
      })
      .catch(function (err) {
        console.log("Failed Export!", err);
      });
  };

  //EMAIL
  const handleMailFormChange = (e) => {
    e.preventDefault();
    setMalFormData({ ...mailFormData, [e.target.name]: e.target.value });
  };
  const handleMailFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/email", mailFormData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(function () {
        setSuccessMail(true);
        setWarning(true);
      })
      .catch(function (err) {
        console.log("Failed Sent Email!", err);
      });
  };

  //LOGOUT
  const handleLogout = () => {
    axios
      .delete("http://localhost:8000/api/logout", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        localStorage.removeItem("token");
        navigate("/login");
      })
      .catch((err) => {
        console.log("Log Out Failed", err);
      });
  };

  return (
    <>
      <Header
        setSearch={setSearch}
        handleSearch={handleSearch}
        handleLogout={handleLogout}
      />
      <div className="main__body__admin">
        <NavLogin filterItems={filterItems} categories={categories} />
        <div className="body__admin">
          {warning ? (
            <Alert color="success">DONE! Please Fresh Page</Alert>
          ) : (
            false
          )}

          <div className="header__body__admin">
            <div className="create">
              <button className="btn__create" onClick={toggle}>
                Create New Employee
              </button>
            </div>
            <div className="import">
              <form onSubmit={handleImport} encType="multipart/form-data">
                <button className="btn__import" type="submit">
                  <FontAwesomeIcon icon={faFileExcel} size="lg" /> Import Excel
                </button>
                <input
                  className="file__import"
                  type="file"
                  required="required"
                  onChange={handleExFormChange}
                />
              </form>
            </div>
            <div className="export">
              <button className="btn__export" onClick={(e) => handleExport(e)}>
                <FontAwesomeIcon icon={faFileExcel} size="lg" /> Export Excel
              </button>
            </div>
            <div className="email">
              <button className="btn__email" onClick={mailToggle}>
                <FontAwesomeIcon icon={faEnvelope} /> Send mail
              </button>
            </div>
            <div className="fresh">
              <button
                className="btn__fresh"
                onClick={(e) => handleFreshPage(e)}
              >
                <FontAwesomeIcon icon={faArrowsRotate} /> Refresh Page
              </button>
            </div>
          </div>
          <div className="">
            <Detail
              isShowingDetail={isShowingDetail}
              hide={detailToggle}
              detail={detail}
            />
            <Create
              handleAddFormChange={handleAddFormChange}
              handleAddFormSubmit={handleAddFormSubmit}
              successCreate={successCreate}
              isShowing={isShowing}
              hide={toggle}
            />
            <Edit
              editFormData={editFormData}
              handleEditFormChange={handleEditFormChange}
              handleEditFormSubmit={handleEditFormSubmit}
              isShowingEdit={isShowingEdit}
              hide={editToggle}
              successEdit={successEdit}
              data={data}
            />
            <Mail
              handleMailFormChange={handleMailFormChange}
              handleMailFormSubmit={handleMailFormSubmit}
              successMail={successMail}
              isShowingMail={isShowingMail}
              hide={mailToggle}
            />
            <div className="app-container">
              <Table
                striped
                bordered
                hover
                size="sm"
                className="main__table"
                style={{ width: "95%" }}
              >
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Birth Date</th>
                    <th>Sex</th>
                    <th>Phone Number</th>
                    <th>Adress</th>
                    <th>Position</th>
                    <th>Salary Level</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {slice.map((staff) => (
                    <Fragment>
                      <ReadOnlyRow
                        staff={staff}
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}
                        handleDetailClick={handleDetailClick}
                      />
                    </Fragment>
                  ))}
                </tbody>
              </Table>
              <hr />
              <button className="btn__loadmore" onClick={() => loadmore()}>
                Load More ...
              </button>
            </div>
          </div>
        </div>
        <General datas={datas} />
      </div>
    </>
  );
}
export default Admin;
