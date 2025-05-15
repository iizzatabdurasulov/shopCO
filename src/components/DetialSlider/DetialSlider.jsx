import { useState } from "react";
import "./DetialSlider.scss";

export default function DetialSlider({ data }) {
  const [activeImg, setActiveImg] = useState(0);
  return (
    <div className="detialSlider">
      <div className="smallImg">
        {data?.smallImg?.length > 0 &&
          data?.smallImg?.map((element, value) => {
            return (
              <img
                onClick={() => setActiveImg(value)}
                className={activeImg === value ? "smallImgActive" : ""}
                src={element}
                alt={data?.productName}
                key={value}
              />
            );
          })}
      </div>
      <div className="bigImg">
        {data?.smallImg?.length > 0 && (
          <img src={data?.smallImg[activeImg]} alt={data?.productName} />
        )}
      </div>
    </div>
  );
}
