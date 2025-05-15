import { Col, Container, Row } from "react-bootstrap";
import "./DressStyle.scss";
import { dressStyleData } from "../../constants/data";
import { useNavigate } from "react-router-dom";

export default function DressStyle() {
  const navigate = useNavigate();
  return (
    <div className="dressStyle">
      <Container>
        <Row>
          <Col lg="12">
            <h2 className="title">BROWSE BY dress STYLE</h2>
          </Col>
          {dressStyleData.map(({ id, title, img, screen }) => {
            return (
              <Col key={id} lg={screen}>
                <div className="box">
                  <h3> {title}</h3>
                  <img
                    onClick={() => navigate(`/category/${title}`)}
                    src={img}
                    alt={title}
                  />
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
