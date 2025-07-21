import "./DetialInfo.scss";
import minus from "../../assets/img/Frame.svg";
import plyus from "../../assets/img/Frame (1).svg";
import { useContext, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Context } from "../../hooks/Context";



export default function DetialInfo({ data }) {
  const [isColor, setIsColor] = useState("red");
  const [isSize, setIsSize] = useState("medium");
  const [countProduct, setCountProduct] = useState(0);
  const { dbBasket, setDbBasket } = useContext(Context);
  const handleAddBasket = (singleProducts) => {
    setDbBasket((prevBasket) => {
      const isBasket = prevBasket.findIndex(
        (element) => element.id === singleProducts.id
      );

      if (isBasket !== -1) {
        const sameProduct = [...prevBasket];
        sameProduct[isBasket].countProduct = countProduct;
        sameProduct[isBasket].isColor = isColor;
        sameProduct[isBasket].isSize = isSize;

        return sameProduct;
      } else {
        return [
          ...dbBasket,
          { ...singleProducts, isColor, isSize, countProduct },
        ];
      }
    });
  };
  console.log(dbBasket);
  return (
    <div className="detialInfo">
      <h3>{data?.productName}</h3>
      <p className="productPrice">
        ${data?.salePrice}{" "}
        <span className="oldPrice">${data?.productPrice}</span>
        <span className="discount">-{data?.discount}%</span>
      </p>
      <p className="desc">{data?.desc}</p>
      <p className="titles">Select Colors</p>
      <ul className="colors">
        {data?.colors?.map((element, value) => {
          return (
            <li
              onClick={() => setIsColor(element)}
              key={value}
              style={{
                background: element,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                width: "37px",
                height: "37px",
                borderRadius: "50%",
              }}
            >
              {isColor === element && <FaCheck />}
            </li>
          );
        })}
      </ul>
      <p className="titles">Choose Size</p>
      <ul className="size">
        {data?.size?.map((element, value) => {
          return (
            <li
              className={element === isSize ? "activeSize" : ""}
              onClick={() => setIsSize(element)}
              key={value}
            >
              {element}
            </li>
          );
        })}
      </ul>
      <div className="btnGroup">
        <ul>
          <li onClick={() => setCountProduct((prev) => prev - 1)}>
            <img src={minus} alt="" />
          </li>
          <span>{countProduct}</span>
          <li onClick={() => setCountProduct((prev) => prev + 1)}>
            <img src={plyus} alt="" />
          </li>
        </ul>
        <button onClick={() => handleAddBasket(data)} className="btnBlack">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
