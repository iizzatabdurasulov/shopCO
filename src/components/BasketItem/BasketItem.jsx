import { FaTrash } from "react-icons/fa";
import "./BasketItem.scss";
import minus from "../../assets/img/Frame.svg";
import plyus from "../../assets/img/Frame (1).svg";
export default function BasketItem({ data }) {
  
  return (
    <div className="basketItem">
      <div className="infoProduct">
        <img src={data?.image} alt="" />
        <div className="info">
          <h3>{data?.productName}</h3>
          <p>
            <span>Size:{data?.isSize} </span>
          </p>
          <p>
            <span>Color: {data?.isColor}</span>
          </p>
          <p className="productPrice">
            ${data?.salePrice}{" "}
            <span className="oldPrice">${data?.productPrice}</span>
            <span className="discount">-{data?.discount}%</span>
          </p>
        </div>
      </div>
      <div className="right">
        <button>
          <FaTrash />
        </button>
        <div className="btnGroup">
          <ul>
            <li>
              <img src={minus} alt="" />
            </li>
            <span>{data?.countProduct}</span>
            <li>
              <img src={plyus} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
