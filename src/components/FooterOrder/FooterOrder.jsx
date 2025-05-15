import { Col, Container, Row } from "react-bootstrap"
import "./FooterOrder.scss"
import PhoneInput from "react-phone-input-2"
import { useState } from "react"
import { FaPhone } from "react-icons/fa"

export default function FooterOrder() {
    const [phone, setPhone] = useState('')
    return (
        <div className="footerOrder">
            <Container>
                <Row className="justify-content-between align-items-center">
                    <Col lg='6'>
                        <h2>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
                    </Col>
                    <Col lg='4'>
                        <form action="">
                            <div className="inp">
                                <PhoneInput
                                    country={'uz'}
                                    value={phone}
                                    onChange={phone => setPhone(phone)}
                                />
                                <FaPhone />
                            </div>
                            <button>Subscribe to Newsletter</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


