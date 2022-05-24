import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsBasketFill } from "react-icons/bs";

import { fetchproducts } from "../../redux/Actions/productActions";
import { rootState } from "../../redux/reducers";
import { addToMyFavorites } from "../../redux/Actions/productActions";


import "./Products.css"
import ProductNavbar from "./ProductNavbar";
import { Product } from "../../Types/productTypes";

export default function Products() {
  const finalproducts = useSelector((state: rootState) =>
    state.productReducer.keyword
      ? state.productReducer.filteredData
      : state.productReducer.products
  );
  const { cart } = useSelector((state: rootState) => state.productReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchproducts());
  }, [dispatch]);

  return (
    <div className="products" >
      <div>
        <ProductNavbar />
      </div>
      <div className="productlist">
        {finalproducts.map((product: Product) => {
          return (
            <div className="each">
              <img
                className="productlistimage"
                src={product.image}
                alt="..."
              />
              <div className="datails1">
                <Link to={`/detail/${product.productName}`}>{product.productName}</Link>
                <p>Category:  {product.category}</p>
                <p>Price: {product.price} Rs</p>
                <p><h5>ProductCode:  {product.productCode}</h5></p>
                <button
                  type="button"
                  className="cartbtn"
                  disabled={cart
                    .map((product: Product) => product.productName)
                    .includes(product.productName)}
                  onClick={() => dispatch(addToMyFavorites(product))}
                ><BsBasketFill className="shoppingcart" size="2rem" />
                  AddToCart
                </button>
                <button type="button" className="cartbtn">Buy Now</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

