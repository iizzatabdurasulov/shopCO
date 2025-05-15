import { FaStar } from "react-icons/fa"
import "./Rating.scss"

export default function Rating({ rate }) {

    return (
        <div className="rating">
            <div className="starIcons" >
                {Array(Number(Math.floor(rate))).fill().map((_, value) => {
                    return <FaStar key={value} />
                })}
            </div>
            <span>{rate}/<span className="five">5</span></span>
        </div>
    )
}
