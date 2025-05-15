import Slider from "react-slick"
import "./PhoneProduct.scss"
import { useState } from "react";
import { productData } from "../../constants/data";
import ProductItem from "../ProductItem/ProductItem";

export default function PhoneProduct({ title }) {
    const [productDb, setProductDb] = useState(productData)
    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        autoplay: true,
        slidesToShow: 1.5,
        slidesToScroll: 1,
    };
    return (
        <div className="phoneProduct">
            <h2 className="title">{title}</h2>
            <Slider {...settings}>
                {productDb.map((element, value) => {
                    return <ProductItem key={value} data={element} />
                })}
            </Slider>
        </div>
    )
}
