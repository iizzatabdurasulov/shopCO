import { Col, Container, Row } from "react-bootstrap";
import "./Basket.scss";
import BasketCard from "../../components/BasketCard/BasketCard";
import BasketOrder from "../../components/BasketOrder/BasketOrder";

export default function Basket() {

  return (
    <div className="basket">
      <Container>
        <h2 className="title">Your Cart</h2>
        <Row>
          <Col lg="6">
            <BasketCard />
          </Col>
          <Col lg="6">
            <BasketOrder />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
