import { useState } from "react";
import { tabsMenu } from "../../constants/data";
import "./ProductTabs.scss";
import RatingReview from "../RatingReview/RatingReview";
export default function ProductTabs() {
  const [activeTabs, setActiveTabs] = useState("Rating & Reviews");
  return (
    <div className="productTabs">
      <ul className="tabsMenu">
        {tabsMenu.map((element, value) => {
          return (
            <li
              className={element === activeTabs ? "activeTabs" : ""}
              onClick={() => setActiveTabs(element)}
              key={value}
            >
              {element}
            </li>
          );
        })}
      </ul>
      {activeTabs == "Rating & Reviews" && <RatingReview />}
    </div>
  );
}
