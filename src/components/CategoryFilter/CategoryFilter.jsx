import React from "react";
import { BiEqualizer } from "react-icons/bi";
import { colors, dressStyleData, filters, sizes } from "../../constants/data";
import "./CategoryFilter.scss";
import { FaAngleUp } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import RangePrice from "../RangePrice/RangePrice";
import { FaXmark } from "react-icons/fa6";
export default function CategoryFilter({ showFilter, setShowFilter }) {
  return (
    <div
      className={
        showFilter ? "categoryFilter activeCategoryFilter" : "categoryFilter"
      }
    >
      <button onClick={() => setShowFilter(false)} className="close">
        <FaXmark />
      </button>
      <div className="clothesCategory">
        <div className="top">
          <h3>Filter</h3>
          <button>
            <BiEqualizer />
          </button>
        </div>

        <ul>
          {filters.map(({ categoryName, id, iconRight: Icons }) => {
            return (
              <li key={id}>
                <span>{categoryName} </span>
                <span>{<Icons />}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="price">
        <div className="top">
          <h2>Price</h2>
          <button>
            <FaAngleUp />
          </button>
        </div>
        <div className="rangePrice">
          <RangePrice />
        </div>
      </div>

      <div className="color">
        <div className="top">
          <h2>Colors</h2>
          <button>
            <FaAngleUp />
          </button>
        </div>
        <div className="colorBox">
          {colors.map(({ color, id }) => {
            return (
              <div
                key={id}
                className="colorCircle"
                style={{ backgroundColor: color }}
              ></div>
            );
          })}
        </div>
      </div>

      <div className="size">
        <div className="top">
          <h2>Size</h2>
          <button>
            <FaAngleUp />
          </button>
        </div>

        <ul>
          {sizes.map(({ size, id }) => {
            return <li key={id}>{size}</li>;
          })}
        </ul>
      </div>

      <div className="categoryDressStyle">
        <div className="top">
          <h2>Dress Styles</h2>
          <button>
            <FaAngleUp />
          </button>
        </div>

        <ul>
          {dressStyleData.map(({ id, title }) => {
            return (
              <li key={id}>
                {title}{" "}
                <span>
                  {" "}
                  <AiOutlineRight />{" "}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <button className="btnBlack">Aply Filter</button>
    </div>
  );
}
