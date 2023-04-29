import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/1.png";
import img2 from "../../../assets/2.png";
import img3 from "../../../assets/3.png";
import { FaCalendarAlt } from "react-icons/fa";
import moment from "moment";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://the-dragon-news.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="text-start">
      <h4>All Category</h4>
      <h5 className="bg-success bg-opacity-10 p-3 rounded ">National News</h5>
      <div>
        {categories.map((category) => (
          <p key={category.id}>
            <Link
              to={`/category/${category.id}`}
              className="text-black text-decoration-none"
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>

      <div>
        <img className="mb-2 w-100" src={img1} alt="" />
        <h6>Bayern Slams Authorities Over Flight Delay to Club World Cup</h6>
        <div className="d-flex justify-content-between">
        <p>Sports</p> 
        <p><FaCalendarAlt/> {moment().format("MMM D, YYYY")}</p>
        </div>
        <img className="mb-2 w-100" src={img2} alt="" />
        <h6>Bayern Slams Authorities Over Flight Delay to Club World Cup</h6>
        <div className="d-flex justify-content-between">
        <p>Sports</p> 
        <p><FaCalendarAlt/> {moment().format("MMM D, YYYY")}</p>
        </div>
        <img className="mb-2 w-100" src={img3} alt="" />
        <h6>Bayern Slams Authorities Over Flight Delay to Club World Cup</h6>
        <div className="d-flex justify-content-between">
        <p>Sports</p> 
        <p><FaCalendarAlt/> {moment().format("MMM D, YYYY")}</p>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
