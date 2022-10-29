import React from "react";
import "./NavLogin.scss";

const NavLogin = ({ categories, filterItems }) => {
  return (
    <>
      <div className="NavLogin">
        <div className="navlogin__title">DEPARTMENT</div>
        {categories.map((category) => {
          return (
            <>
              <button
                type="button"
                key={category.toString()}
                onClick={() => filterItems(category)}
              >
                {category}
              </button>
              <br />
            </>
          );
        })}
      </div>
    </>
  );
};

export default NavLogin;
