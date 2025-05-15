import Marquee from "react-fast-marquee"
import "./BrandCarousel.scss"
import zara from "../../assets/img/zara-logo-1 1.png"
import gucci from "../../assets/img/gucci-logo-1 1.png"
import calvien from "../../assets/img/Group (2).png"
import versache from "../../assets/img/Group (1).png"
import { Container } from "react-bootstrap"

export default function BrandCarousel() {
    return (
        <div className="brandCarousel">
            <Container>
                <Marquee autoFill={true}>
                    <img src={zara} alt="zara" />
                    <img src={gucci} alt="gucci" />
                    <img src={calvien} alt="calvienKlean" />
                    <img src={versache} alt="versache" />
                </Marquee>
            </Container>
        </div>
    )
}
