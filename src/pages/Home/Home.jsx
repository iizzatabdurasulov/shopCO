import { Container } from "react-bootstrap"
import BrandCarousel from "../../components/BrandCarousel/BrandCarousel"
import HeaderBanner from "../../components/HeaderBanner/HeaderBanner"
import Products from "../../components/Products/Products"
import "./Home.scss"
import PhoneProduct from "../../components/PhoneProduct/PhoneProduct"
import DressStyle from "../../components/DressStyle/DressStyle"
import Comments from "../../components/Comments/Comments"

export default function Home() {



    return (
        <div className="home">
            <HeaderBanner />
            <BrandCarousel />
            <Container>
                <Products title="NEW ARRIVALS" />
                <PhoneProduct title="NEW ARRIVALS" />
                <hr style={{ marginTop: '64px' }} />
                <Products title="top selling" />
                <PhoneProduct title="top selling" />
                <DressStyle />
            </Container>
            <Comments />
        </div>
    )
}
