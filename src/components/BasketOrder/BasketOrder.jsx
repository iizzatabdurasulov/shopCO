import { FaArrowRight } from "react-icons/fa";
import "./BasketOrder.scss";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../hooks/Context";

export default function BasketOrder() {
  const { dbBasket } = useContext(Context);
  const [promocode, setPromocode] = useState("");
  const [addPromocode, setAddPromocode] = useState(0);
  const [randomGivenDiscount, setRandomGivenDiscount] = useState(0);
  const [promocodeApplied, setPromocodeApplied] = useState(false);
  const [subTotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);
  const [delieveryFee, setDelieveryFee] = useState(15);

  useEffect(() => {
    const newDbTotal = dbBasket.reduce((prev, next) => {
      return prev + Number(next.productPrice) * Number(next.countProduct);
    }, 0);

    setSubTotal(newDbTotal);

    const salePrice = dbBasket.reduce((prev, next) => {
      if (next.salePrice) {
        return (
          prev +
          (Number(next.salePrice) * Number(next.countProduct) * next.discount) /
            100
        );
      }
      return prev + Number(next.productPrice) * Number(next.countProduct);
    }, 0);
    setDiscount(salePrice);

    const total = newDbTotal - salePrice - addPromocode + delieveryFee;
    setFinalTotal(total);
  }, [dbBasket, addPromocode]);

  const handlePromoCode = (e) => {
    setPromocode(e.target.value);
  };

  const handleAddPromoCode = (e) => {
    e.preventDefault();
    if (promocode === "FINTECH") {
      const randomDiscount = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
      setRandomGivenDiscount(randomDiscount);
      const discount = (randomDiscount * subTotal) / 100;
      setAddPromocode(discount);
      setPromocodeApplied(true)
    }

    setPromocode("");
  };

  return (
    <div className="basketOrder">
      <h3>Order summary</h3>
      <ul>
        <li>
          <span>SubTotal</span>
          <span>${subTotal}</span>
        </li>
        <li>
          <span>Discount</span>
          <span>-${discount}</span>
        </li>
        <li>
          <span>Delivery Fee</span>
          <span>${delieveryFee}</span>
        </li>
        <li className="promocode">
          <span>Promocode</span>
          <span>
            {randomGivenDiscount}% (${addPromocode})
          </span>
        </li>

        <li className="total">
          <span>Total</span>
          <span>${finalTotal}</span>
        </li>
      </ul>
      <form action="">
        <div className="inp">
          <input
            onChange={handlePromoCode}
            type="text"
            placeholder="Add promo code"
            disabled={promocodeApplied}

          />
        </div>
        <button
          disabled={!promocode.trim()}
          onClick={handleAddPromoCode}
          className="btnBlack"
        >
          Apply
        </button>
      </form>
      <button className="btnBlack">
        Go to CheckOut <FaArrowRight />
      </button>
    </div>
  );
}
