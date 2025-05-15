import { useParams } from "react-router-dom"
import "./ProductDetails.scss"
import { useEffect, useState } from "react"
import { productData } from "../../constants/data"
import DetialSlider from "../../components/DetialSlider/DetialSlider"
import { Col, Container, Row } from "react-bootstrap"
import DetialInfo from "../../components/DetialInfo/DetialInfo"
import ProductTabs from "../../components/ProductTabs/ProductTabs"

export default function ProductDetails() {
    const { id } = useParams()
    const [singleData, setSingleData] = useState({})
    useEffect(() => {
        const singleProduct = productData.find(element => element.id == id)
        setSingleData(singleProduct)
    }, [id])
    return (
        <div className="productDetails">
            <Container>
                <Row className="align-items-center justify-content-between">
                    <Col lg='6'>
                        <DetialSlider data={singleData} />
                    </Col>
                    <Col lg='6'>
                        <DetialInfo data={singleData} />
                    </Col>
                    <Col lg='12'>
                        <ProductTabs />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
