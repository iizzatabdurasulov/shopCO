import { Col, Container, Row } from "react-bootstrap"
import FooterOrder from "../FooterOrder/FooterOrder"
import "./Footer.scss"
import { Link } from "react-router-dom"
import { FaFacebook, FaGithub, FaInstagram, FaTelegram } from "react-icons/fa"
import { FooterData, paymentIcons } from "../../constants/data"

export default function Footer() {
    return (
        <footer>
            <FooterOrder />
            <Container>
                <Row className="align-items-center justify-content-between">
                    <Col lg='3'>
                        <Link to={'/'} className="logo">SHOP.CO</Link>
                        <p className="infoAbout">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                        <ul className="iconsGroup">
                            <li><FaTelegram /></li>
                            <li><FaInstagram /></li>
                            <li><FaGithub /></li>
                            <li><FaFacebook /></li>
                        </ul>
                    </Col>
                    {
                        FooterData?.map(({ title, Catalog }, value) => {
                            return <Col key={value} lg='auto'>
                                <h3>{title}</h3>
                                <ul className="menuList">
                                    {Catalog.map((element, value) => {
                                        return <li key={value}><Link slug={element}>{element}</Link></li>
                                    })}
                                </ul>
                            </Col>
                        })
                    }
                    <Col lg='12'>
                        <div className="footerBottom">
                            <p>Shop.co © 2000-2023, All Rights Reserved</p>
                            <ul className="paymentGroup">
                                {paymentIcons.map((element, value) => {
                                    return <li key={value}>
                                        <Link><img src={element} alt="" /></Link>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>   
    )
}
