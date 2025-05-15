import React from "react";
import "./CategoryCard.scss";
import { productData } from "../../constants/data";
import ProductItem from "../ProductItem/ProductItem";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { BiEqualizer } from "react-icons/bi";

export default function CategoryCard({ showFilter, setShowFilter }) {
  const { categoryName } = useParams();

  return (
    <div className="categoryCard">
      <Row>
        <Col lg="12">
          <div className="categoryTop">
            <h3>
              {categoryName} <span>Showing 1-10 of 100 Products Sort by:</span>
            </h3>
            <div className="right">
              <p>Showing 1-10 of 100 Products Sort by: </p>
              <select name="" id="">
                <option value="">Most Popular</option>
              </select>
              <button
                onClick={() => setShowFilter(!showFilter)}
                className="btnFilter"
              >
                <BiEqualizer />
              </button>
            </div>
          </div>
        </Col>
        {productData.slice(0, 9).map((element, index) => {
          return (
            <Col lg="4" xs="6" key={index}>
              <ProductItem data={element} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
