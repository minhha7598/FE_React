import React from "react";
import {
  faSearch,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.scss";

const Header = ({ setSearch, handleSearch, handleLogout }) => {
  return (
    <>
      <div className="header__admin">
        <div className="title">
          <FontAwesomeIcon icon={faUser} /> | WELCOME TO DASHBOARD
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search name ..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn-search" onClick={() => handleSearch()}>
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </button>
        </div>
        <div className="logout">
          <label className="btn-logout" onClick={() => handleLogout()}>
            <FontAwesomeIcon icon={faRightFromBracket} size="lg" /> Log-out
          </label>
        </div>
      </div>
    </>
  );
};

export default Header;
