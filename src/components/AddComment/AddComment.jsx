import { FaXmark } from "react-icons/fa6"
import "./AddComment.scss"
import { useContext, useState } from "react"
import { Context } from "../../hooks/Context"
import { v4 as uuidv4 } from 'uuid';
import moment from "moment";
export default function AddComment() {
    const { setToggleModal, toggleModal, dbComments, setDbComments } = useContext(Context)
    const [names, setNames] = useState('')
    const [ratings, setRatings] = useState(0)
    const [comments, setComments] = useState('')
    const handleAddComments = (e) => {
        e.preventDefault()
        const data = {
            id: uuidv4(),
            rating: ratings,
            name: names,
            desc: comments,
            date: moment().format('L')
        }
        const newComments = [...dbComments, data]
        setDbComments(newComments)
        setToggleModal(false)

        setComments('')
        setNames('')
        setRatings(0)
    }

    return (
        <div className={toggleModal ? "addComment activeComment" : "addComment"}>
            <div className="addCommentBody">
                <button onClick={() => setToggleModal(false)} className="close"><FaXmark /></button>
                <h2>Add Comments</h2>
                <form onSubmit={handleAddComments} action="">
                    <div className="inp">
                        <label htmlFor="names">Enter your names</label>
                        <input onChange={(e) => setNames(e.target.value)} type="text" id="names" placeholder="Enter your names" />
                    </div>
                    <ul>
                        {
                            Array(5).fill().map((_, value) => {
                                return <li style={value === ratings - 1 ? { background: 'crimson', borderColor: 'crimson' } : { background: 'transparent' }} onClick={() => setRatings(value + 1)} key={value}>{value + 1}</li>
                            })
                        }
                    </ul>
                    <div className="inp">
                        <label htmlFor="comment">Enter your comment</label>
                        <textarea onChange={(e) => setComments(e.target.value)} name="" id="comment" placeholder="Enter your comments"></textarea>
                    </div>
                    <button>Add Comment</button>
                </form>
            </div>
        </div >
    )
}
