import React from "react";
import logo from "../../../assets/logo.png";
import { Image } from "react-bootstrap";
import moment from 'moment';
const Header = () => {
  return (
    <div>
      <div className="text-center">
        <img src={logo} alt="" />
        <p>
          <small>Journalism Without Fear or Favor</small>
        </p>
        <h4>{moment().format("dddd, MMMM D, YYYY")}</h4>
      </div>
    </div>
  );
};

export default Header;
