import { FaCheckCircle, FaTrash } from "react-icons/fa"
import Rating from "../Rating/Rating"
import "./CommentItem.scss"
import { useContext } from "react"
import { Context } from "../../hooks/Context"
import './CommentItem.scss'
export default function CommentItem({ id, rating, isDate, name, date, desc }) {
    const { dbComments, setDbComments } = useContext(Context)

    const handleRemoveComment = (commentId) => {
        const newDbComments = dbComments.filter((element) => element.id !== commentId)
        setDbComments(newDbComments)
    }

    return (
        <div className="commentItem">
            <div className="topComments">
                <Rating rate={rating} />
                {isDate && <button onClick={() => handleRemoveComment(id)} className="removeComments"><FaTrash /></button>}
            </div>
            <h3>{name} <FaCheckCircle /></h3>
            <p>{desc?.slice(0, 150)}...</p>
            {isDate && <p className="date">{date}</p>}
        </div>
    )
}
