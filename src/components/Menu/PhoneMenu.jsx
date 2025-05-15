import { Link } from "react-router-dom"
import { menuLink } from "../../constants/data"
import "./Menu.scss"
import { FaXmark } from "react-icons/fa6"
import { useContext } from "react"
import { Context } from "../../hooks/Context"
export default function PhoneMenu() {
    const { isPhoneMenu, setIsPhoneMenu } = useContext(Context)
    return (
        <div className={isPhoneMenu ? "phoneMenu isActiveMenu" : "phoneMenu"}>
            <button onClick={() => setIsPhoneMenu(false)} className="close"><FaXmark /></button>
            <ul className="phoneMenuBar">
                {
                    menuLink.map(({ id, linkName, slug }) => {
                        return <li key={id}><Link to={slug}>{linkName}</Link></li>
                    })
                }
            </ul>
        </div>
    )
}
