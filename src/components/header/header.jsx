import React from "react";
import "./header.css";
import "../../index.css";
import avatar from "../../../public/avatar.jpg";
export const Header = () => {
  return (
    <header>
      <nav className="header-nav">
        <div className="container">
          <div className="header-wrapper">
            <div className="left-area">
              <img src={avatar} alt="avatar-image" className="avatar" />
              <div className="user-profile">
                <p className="company-name">Afex Group</p>
                <p className="user-status">online</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
