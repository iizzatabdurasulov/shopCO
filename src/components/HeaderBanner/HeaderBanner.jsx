import Slider from "react-slick"
import "./HeaderBanner.scss"
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../assets/img/Rectangle 2 (2).png"
import iconImg from '../../assets/img/Vector (4).png'
import CounterInfo from "../CounterInfo/CounterInfo";
export default function HeaderBanner() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <header className="headerBanner">
            <Container>
                <Slider {...settings}>
                    {
                        Array(4).fill().map((_, value) => {
                            return <div key={value}>
                                <Row className="align-items-end">
                                    <Col lg='6'>
                                        <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                                        <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                                        <button className="btnBlack">Shop Now</button>
                                        <CounterInfo />
                                    </Col>
                                    <Col lg='6' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                                        <img src={img1} alt="" />
                                        <img src={iconImg} alt="" className="smallIcons" />
                                        <img src={iconImg} className="bigIcons" alt="" />
                                    </Col>
                                </Row>
                            </div>
                        })
                    }
                </Slider>
            </Container>
        </header>
    )
}

