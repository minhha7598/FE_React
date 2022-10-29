import React from "react";
import "./Index.scss";
import Nav from "../../Components/Nav/Nav";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Index({ datas }) {
  return (
    <>
      <Nav />
      <div className="body__default">
        {/* <div className="title__body">HUMAN RESOURES DEPARTMENT</div>{" "} */}
        {/* <Carousel
          width="390px"
          swipeScrollTolerance={1}
          className="carousel-slider"
        >
          <div>
            <img src={require("../../assets/img/logo_1.png")} />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={require("../../assets/img/logo_2.png")} />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={require("../../assets/img/logo_1.png")} />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel> */}
      </div>
    </>
  );
}
export default Index;
