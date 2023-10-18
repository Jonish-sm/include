import Card from "../../components/Card/Card";
import React from "react";
import filter from "../../assets/filter-new.svg";
import { BsArrowRightCircle } from "react-icons/bs";
import "./category.css";

const Category = () => {
  return (
    <div className="main_bg">
      <div className="category">
        <div className="left-nav">
          <img src={filter} alt="filter" />
          <button className="active-btn">ALL</button>
          <button>NEOM</button>
          <button>AMAALA</button>
          <button>TDRSC</button>
          <button>MAKKAH</button>
          <button>UMLAJJ</button>
          <button>AL&nbsp;MADINAH</button>
          <button>ASIR</button>
          <button>JAZAN</button>
        </div>
        <div className="right-nav">
          <span>View all</span>
          <BsArrowRightCircle />
        </div>
      </div>
      <Card />
    </div>
  );
};

export default Category;