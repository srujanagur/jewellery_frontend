import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Home/NavbarSection";
import Login from "./components/UserAuthentication/Login/Login";
import { rootState } from "./redux/reducers";
import { useSelector } from "react-redux";
import Logo from "./components/Home/Logo";
import Footer from "./components/Footer/Footer";



function App() {
  const theme = useSelector((state: rootState) => state.themeReducer.theme);
  console.log("theme" + theme);
  return (
    <div className="data" data-color-mode={theme}>
      <BrowserRouter>
        <Logo />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/detail/:name" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />

          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
