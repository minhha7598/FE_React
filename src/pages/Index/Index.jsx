import React from "react";
import "./Index.scss";
import Nav from "../../Components/Nav/Nav";

function Index({ datas }) {
  return (
    <>
      <Nav />
      <div className="body__default">
        <div className="title__body">HUMAN RESOURES DEPARTMENT</div>
        <div className="main__body">
          <img
            src={require("../../assets/img/Workshop-là-gì-–-Xác-định-đối-tượng-truyền-thông-Phần-1-minara.net-1.png")}
            alt="img"
          />
          <div className="first__body">
            <div className="title">
              Find new talent
              <li>Fill the empty position</li>
              <li>Resume Analysis</li>
              <li>Interview</li>
              <li>Create a job offer</li>
            </div>
            <div className="title">
              Create a quisle culture
              <li>Group communication</li>
              <li>Internal social network</li>
            </div>
          </div>
          <div className="second__body">
            <div className="a">
              Create job opportunities and post on job sites.
            </div>
            <div className="b">
              Schedule an interview with the candidate and the hiring manager.
            </div>
            <div className="a">
              Tools will shape the way people work better.
            </div>
            <div className="b">
              Create and share HR policies and training presentations.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Index;
