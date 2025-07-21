import { FaTrash } from "react-icons/fa";
import "./BasketItem.scss";
import minus from "../../assets/img/Frame.svg";
import plyus from "../../assets/img/Frame (1).svg";
import { useContext } from "react";
import { Context } from "../../hooks/Context";
export default function BasketItem({ data }) {
  const { dbBasket, setDbBasket } = useContext(Context);

  const handleDelete = () => {
    const updatedBasket = dbBasket.filter((item) => item.id !== data.id);
    setDbBasket(updatedBasket);
  };
  const increaseCount = () => {
    const updated = dbBasket.map((item) =>
      item.id === data.id
        ? { ...item, countProduct: item.countProduct + 1 }
        : item
    );
    setDbBasket(updated);
  };

  const decreaseCount = () => {
    const updated = dbBasket.map((item) =>
      item.id === data.id
        ? {
            ...item,
            countProduct: Math.max(1, item.countProduct - 1),
          }
        : item
    );
    setDbBasket(updated);
  };

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
        <button onClick={handleDelete}>
          <FaTrash />
        </button>
        <div className="btnGroup">
          <ul>
            <li onClick={decreaseCount}>
              <img src={minus} alt="minus" />
            </li>
            <span>{data?.countProduct}</span>
            <li onClick={increaseCount}>
              <img src={plyus} alt="plus" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
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
