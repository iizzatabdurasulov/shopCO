import { FaBars, FaXmark } from "react-icons/fa6";
import "./Navbar.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Menu from "../Menu/Menu";
import SearchProduct from "../SearchProduct/SearchProduct";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../hooks/Context";

export default function Navbar() {
  const [isBanner, setIsBanner] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isScroll, setIsScroll] = useState(true);
  const [scrollYSize, setScrollSize] = useState(0);
  const { setIsPhoneMenu, dbBasket } = useContext(Context);
  const navigate = useNavigate();
  const handleToggleBanner = () => {
    setIsBanner(true);
  };

  const handleShowSearch = () => {
    setIsSearch(( prev) => !prev);
  };

  const handleActiveScroll = () => {
    if (window.scrollY > scrollYSize) {
      setIsScroll(false);
    } else {
      setIsScroll(true);
    }
    setScrollSize(window.scrollY);
  };

  useEffect(() => {
    isBanner &&
      setTimeout(() => {
        setIsBanner(false);
      }, 5000);
  }, [isBanner]);

  useEffect(() => {
    window.addEventListener("scroll", handleActiveScroll);

    return () => {
      window.removeEventListener("scroll", handleActiveScroll);
    };
  }, [scrollYSize]);

  return (
    <nav>
      <div className={isBanner ? "navTop hideTopNav" : "navTop"}>
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg="auto">
              <p>
                Sign up and get 20% off to your first order.{" "}
                <Link to={"/"}>Sign Up Now</Link>
              </p>
            </Col>
            <Col className="btnClose" lg="auto">
              <button onClick={handleToggleBanner}>
                <FaXmark />
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      <div
        style={scrollYSize == 0 ? { top: "35px" } : { top: "0px" }}
        className={isScroll ? "navBottom" : "navBottom activeNavbar"}
      >
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col xs="auto">
              <div className="logoContent">
                <button onClick={() => setIsPhoneMenu(true)} className="bars">
                  <FaBars />
                </button>
                <Link className="logo" to={"/"}>
                  SHOP.CO
                </Link>
              </div>
            </Col>
            <Col className="menuList" lg="auto">
              <Menu />
            </Col>
            <Col
              className={
                isSearch ? "searchContent showSearch" : "searchContent"
              }
              lg="6"
            >
              <SearchProduct />
            </Col>
            <Col xs="auto">
              <ul className="iconsGroup">
                <li onClick={handleShowSearch}>
                  {isSearch ? <FaXmark /> : <FaSearch />}
                </li>
                <li onClick={() => navigate("/basket")}>
                  <CgShoppingCart />{" "}
                  {dbBasket?.length > 0 && (
                    <span className="counter">{dbBasket?.length}</span>
                  )}
                </li>
                <li>
                  <FaUserCircle />
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </nav>
  );
}
