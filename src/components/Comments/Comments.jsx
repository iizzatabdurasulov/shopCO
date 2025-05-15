import { Container } from "react-bootstrap"
import "./Comments.scss"
import Slider from "react-slick"
import { comment } from "../../constants/data";
import CommentItem from "../CommentItem/CommentItem";

export default function Comments() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199, // At max-width 1199px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div className="comments">
            <Container>
                <h2 className="title">OUR HAPPY CUSTOMERS</h2>
            </Container>
            <Slider  {...settings}>
                {
                    comment.map(({ id, rating, name, desc }) => {
                        return <CommentItem isDate={false} key={id} rating={rating} name={name} desc={desc} />
                    })
                }
            </Slider>
        </div>
    )
}
