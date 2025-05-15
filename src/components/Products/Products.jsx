import { Col, Row } from "react-bootstrap"
import "./Products.scss"
import ProductItem from "../ProductItem/ProductItem"
import { useState } from "react"
import { productData } from "../../constants/data"
export default function Products({ title }) {

    const [productDb, setProductDb] = useState(productData)
    const [viewAll, setViewAll] = useState(4)

    const handleViewAllProduct = () => {
        if (viewAll === 4) {
            setViewAll(productDb.length)
        } else {
            setViewAll(4)
        }
    }
    return (
        <div className="products">
            <h2 className="title">{title}</h2>
            <Row>
                {
                    productDb.slice(0, viewAll).map((element, value) => {
                        return <Col lg='3' key={value}>
                            <ProductItem data={element} />
                        </Col>
                    })
                }
                <Col lg='12' style={{ textAlign: 'center' }}>
                    <button onClick={handleViewAllProduct} className="viewAll">view All</button>
                </Col>
            </Row>
        </div>
    )
}
