import CountUp from "react-countup";
import "./CounterInfo.scss"
export default function CounterInfo() {
    return (
        <div className="counterInfo">
            <ul>
                <li>
                    <CountUp separator="," suffix="+" end={200} />
                    <span className="text">International Brands</span>
                </li>
                <li>
                    <CountUp separator="," suffix="+" end={2000} />
                    <span className="text">High-Quality Products</span>
                </li>
                <li>
                    <CountUp separator="," suffix="+" end={30000} />
                    <span className="text">Happy Customers</span>
                </li>
            </ul>
        </div>
    )
}
