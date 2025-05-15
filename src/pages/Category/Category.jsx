import { Col, Container, Row } from "react-bootstrap";
import "./Category.scss";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { useState } from "react";

export default function Category() {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="category">
      <Container>
        <Row>
          <Col lg="12">
            <BreadCrumb />
          </Col>

          <Col lg="3">
            <CategoryFilter
              showFilter={showFilter}
              setShowFilter={setShowFilter}
            />
          </Col>
          <Col lg="9">  
            <CategoryCard
              showFilter={showFilter}
              setShowFilter={setShowFilter}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
