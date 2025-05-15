import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Basket from "./pages/Basket/Basket";
import Category from "./pages/Category/Category";
import Navbar from "./components/Navbar/Navbar";
import PhoneMenu from "./components/Menu/PhoneMenu";
import { Context } from "./hooks/Context";
import { useState } from "react";
import "react-phone-input-2/lib/style.css";
import Footer from "./components/Footer/Footer";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import ScrollToTop from "./utilts/ScrollToTop";
import { comment } from "./constants/data";

export default function App() {
  const [isPhoneMenu, setIsPhoneMenu] = useState(false);
  const [scrollYSize, setScrollSize] = useState(0);
  const [toggleModal, setToggleModal] = useState(false);
  const [dbComments, setDbComments] = useState(comment);
  const [dbBasket, setDbBasket] = useState([]);
  return (
    <div>
      <ScrollToTop />
      <Context.Provider
        value={{
          dbBasket,
          setDbBasket,
          dbComments,
          setDbComments,
          isPhoneMenu,
          toggleModal,
          setToggleModal,
          setIsPhoneMenu,
          scrollYSize,
          setScrollSize,
        }}
      >
        <Navbar />
        {/* sm-menu-list */}
        <PhoneMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/productDetials/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </Context.Provider>
    </div>
  );
}
