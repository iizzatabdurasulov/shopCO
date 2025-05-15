import { Link, useLocation } from "react-router-dom";
import "./BreadCrumb.scss";
import { FaChevronRight } from "react-icons/fa";

export default function BreadCrumb() {
  const location = useLocation();
  const pathname = location.pathname.split("/").filter(Boolean);

  let breadCrumpPath;
  console.log(pathname);

  return (
    <div className="breadCrumb">
      {pathname?.map((segment, value) => {
        breadCrumpPath += `/${segment}`;
        const isLast = value === pathname - 1;
        return !isLast ? (
          <Link key={value} to={breadCrumpPath}>
            {segment} <FaChevronRight />
          </Link>
        ) : (
          <span key={value}>
            {segment}
          </span>
        );
      })}
    </div>
  );
}
