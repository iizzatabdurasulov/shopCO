import { BiEqualizer } from "react-icons/bi";
import "./RatingReview.scss";
import { Col, Row } from "react-bootstrap";
import CommentItem from "../CommentItem/CommentItem";
import AddComment from "../AddComment/AddComment";
import { useContext, useState } from "react";
import { Context } from "../../hooks/Context";
import { comment } from "../../constants/data";
export default function RatingReview() {
  const { setToggleModal, dbComments } = useContext(Context);
  const [viewAll, setViewAll] = useState(2);
  const [sort, setSort] = useState("Latest");
  const handleViewAllProduct = () => {
    if (viewAll === 2) {
      setViewAll(dbComments.length);
    } else {
      setViewAll(2);
    }
  };

  const handleSort = (e) => {
    const sorted = e.target.value;
    setSort(sorted);

    if (sorted === "Latest") {
      comment.sort(
        (a, b) => b.date.replace(/-/g, "") - a.date.replace(/-/g, "")
      );
    } else if (sorted === "Oldest") {
      comment.sort(
        (a, b) => a.date.replace(/-/g, "") - b.date.replace(/-/g, "")
      );
    }
  };

  return (
    <div className="ratingReview">
      <div className="ratingTop">
        <h3>
          All Reviews <span>({dbComments?.length})</span>
        </h3>
        <ul>
          <li>
            <BiEqualizer />
          </li>
          <select onChange={handleSort} name="" id="">
            <option value="Latest">Latest</option>
            <option value="Oldest">Oldest</option>
          </select>
          <button onClick={() => setToggleModal(true)} className="btnBlack">
            Write a Review
          </button>
        </ul>
      </div>
      <Row>
        {dbComments.slice(0, viewAll).map((element, value) => {
          return (
            <Col key={value} lg="6">
              <CommentItem
                isDate={true}
                name={element.name}
                date={element.date}
                desc={element.desc}
                rating={element.rating}
                id={element.id}
              />
            </Col>
          );
        })}
        <Col lg="12" style={{ textAlign: "center" }}>
          <button onClick={handleViewAllProduct} className="viewAll">
            {viewAll === 2 ? "View All" : "Hide"}
          </button>
        </Col>
      </Row>
      <AddComment />
    </div>
  );
}
