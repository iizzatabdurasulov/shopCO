import { Link } from "react-router-dom"
import { menuLink } from "../../constants/data"
import "./Menu.scss"

export default function Menu() {
    return (
        <ul className="menuBar">
            {
                menuLink.map(({ id, linkName, slug }) => {
                    return <li key={id}><Link to={slug}>{linkName}</Link></li>
                })
            }
        </ul>
    )
}
