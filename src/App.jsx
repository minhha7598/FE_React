import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Index from "./pages/Index/Index";
import Admin from "./pages/Admin/Admin";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/app.scss";
import axios from "axios";

function App() {
  const [search, setSearch] = useState();
  const [warning, setWarning] = useState(false);
  const [datas, setDatas] = useState([]);
  const [staffs, setStaffs] = useState([]);

  const [successCreate, setSuccessCreate] = useState(false);
  const [successEdit, setSuccessEdit] = useState(false);
  const [successMail, setSuccessMail] = useState(false);

  //LOAD MORE
  const [noOfElement, setNoOfElement] = useState(6);
  const loadmore = () => {
    setNoOfElement(noOfElement + noOfElement);
  };
  const slice = staffs.slice(0, noOfElement);

  //FETCH DATA
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/admin", {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(function (res) {
        setDatas(res.data.data);
        setStaffs(res.data.data);
      })
      .catch(function () {
        console.log(">>> Failed get data");
      });
  }, []);

  //FILTER
  const categories = ["All", ...new Set(datas.map((data) => data.ten_chuc_vu))];
  const filterItems = (category) => {
    if (category === "All") {
      setStaffs(datas);
      setNoOfElement(6);
      return;
    }
    const newItems = datas.filter((data) => data.ten_chuc_vu === category);
    setStaffs(newItems);
    setNoOfElement(6);
  };

  //SEARCH
  const handleSearch = () => {
    const newStaff = datas.filter(function (data) {
      if (data.ho_ten.toLowerCase().includes(search.toLowerCase())) {
        return data.ho_ten;
      } else {
        return null;
      }
    });
    setStaffs(newStaff);
  };

  //REFRESH
  const handleFreshPage = (e) => {
    e.preventDefault();
    axios
      .get("http://127.0.0.1:8000/api/admin", {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(function (res) {
        setWarning(false);
        setSuccessCreate(false);
        setSuccessEdit(false);
        setSuccessMail(false);
        setDatas(res.data.data);
        setStaffs(res.data.data);
      })
      .catch(function () {
        console.log(">>> Failed get data");
      });
  };

  return (
    <React.Fragment>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index datas={datas} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/admin"
              exact
              // render={() => {
              //   return localStorage.getItem("token") ? (
              //     <Admin
              //       datas={datas}
              //       filterItems={filterItems}
              //       categories={categories}
              //       staffs={staffs}
              //       slice={slice}
              //       loadmore={loadmore}
              //       setSearch={setSearch}
              //       handleSearch={handleSearch}
              //       handleFreshPage={handleFreshPage}
              //       warning={warning}
              //       setWarning={setWarning}
              //       successCreate={successCreate}
              //       setSuccessCreate={setSuccessCreate}
              //       successEdit={successEdit}
              //       setSuccessEdit={setSuccessEdit}
              //       successMail={successMail}
              //       setSuccessMail={setSuccessMail}
              //     />
              //   ) : (
              //     <Navigate path="/login" replace={true} />
              //   );
              // }}
              element={
                <Admin
                  datas={datas}
                  filterItems={filterItems}
                  categories={categories}
                  staffs={staffs}
                  slice={slice}
                  loadmore={loadmore}
                  setSearch={setSearch}
                  handleSearch={handleSearch}
                  handleFreshPage={handleFreshPage}
                  warning={warning}
                  setWarning={setWarning}
                  successCreate={successCreate}
                  setSuccessCreate={setSuccessCreate}
                  successEdit={successEdit}
                  setSuccessEdit={setSuccessEdit}
                  successMail={successMail}
                  setSuccessMail={setSuccessMail}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}
export default App;
