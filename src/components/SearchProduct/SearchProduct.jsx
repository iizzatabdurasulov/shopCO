import { FaSearch } from "react-icons/fa"
import "./SearchProduct.scss"
export default function SearchProduct() {
    return (
        <form className="searchProduct">
            < input type="text" placeholder="Search for products..." />
            <button><FaSearch /></button>
        </form >
    )
}
