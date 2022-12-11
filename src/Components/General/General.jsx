import React from "react";
import "./General.scss";

function General({ datas }) {
  const Design = datas.filter(function (data) {
    return data.ten_chuc_vu === "Designer";
  });
  const DA = datas.filter(function (data) {
    return data.ten_chuc_vu === "Data Analyst";
  });
  const Dev = datas.filter(function (data) {
    return data.ten_chuc_vu === "Software Developer";
  });
  const Acct = datas.filter(function (data) {
    return data.ten_chuc_vu === "Accountant";
  });
  const Tester = datas.filter(function (data) {
    return data.ten_chuc_vu === "Tester";
  });
  const BA = datas.filter(function (data) {
    return data.ten_chuc_vu === "Business Analyst";
  });

  return (
    <>
      <div className="General">
        <div className="infor__general">
          <div className="general__title">QUANTITY EMPLOYEES</div>
          <div className="quantity__employee">
            Tester: {Tester.length} employees
          </div>
          <div className="quantity__employee">
            Designer: {Design.length} employees
          </div>
          <div className="quantity__employee">
            Accountant: {Acct.length} employees
          </div>
          <div className="quantity__employee">
            Data Analyst: {DA.length} employees
          </div>
          <div className="quantity__employee">
            Business Analyst: {BA.length} employees
          </div>
          <div className="quantity__employee">
            Software Developer: {Dev.length} employees
          </div>
          <hr />
          <div className="total__quantity__employee">
            Total: {datas.length} employees
          </div>
        </div>

        <div className="excel__staff">
          <div className="title__quantity__employee">EXCELLENT EMPLOYEE</div>
          <div className="main__staff">
            <img
              src={require("../../assets/img/Vo_Thi_Hien.jpg")}
              className="ava"
            />
            <div className="name">Vo Thi Hien</div>
            <div className="position">Bussiness Analyst</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default General;
