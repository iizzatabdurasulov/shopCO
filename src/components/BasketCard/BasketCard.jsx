import { useContext } from "react";
import BasketItem from "../BasketItem/BasketItem";
import "./BasketCard.scss";
import { Context } from "../../hooks/Context";
export default function BasketCard() {
  const { dbBasket } = useContext(Context);
  return (
    <div className="basketCard">
      {dbBasket?.length > 0 ? (
        dbBasket.map((element, value) => {
          return <BasketItem key={value} data={element} />;
        })
      ) : (
        <h2 className="title">Basket is empty</h2>
      )}
    </div>
  );
}
