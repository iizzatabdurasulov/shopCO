import "./ProductItem.scss"
import Rating from "../Rating/Rating"
import { useNavigate } from "react-router-dom"
export default function ProductItem({ data }) {
    const navigate = useNavigate()
    return (
        <div className="productItem">
            <img onClick={() => navigate(`/productDetials/${data.id}`)} src={data?.image} alt={data?.productName} />
            <h3 className="productName">{data?.productName} </h3>
            <Rating rate={data?.rating} />
            <p className="productPrice">
                ${data?.salePrice} <span className="oldPrice">${data?.productPrice}</span>
                <span className="discount">-{data?.discount}%</span>
            </p>
        </div>
    )
}
