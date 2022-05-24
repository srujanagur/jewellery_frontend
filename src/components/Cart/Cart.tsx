import axios from 'axios';
import React from 'react';
import { Button, Col, Container, Row, } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../../redux/Actions/orderActions';
import { orderType, saveMyFavoritesToCart } from '../../redux/Actions/productActions';


import { deleteFromCartList } from "../../redux/Actions/productActions";
import { rootState } from '../../redux/reducers';


import "./Cart.css";

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useSelector((state: rootState) => state.productReducer);
  const userInfoTokenObject = useSelector((state: rootState) => state.userReducer)
  const orderDetails: orderType = {
    shippingAddress: {
      address: "",
      city: "",
      state: "",
      country: "",
      pincode: 0,
      phoneNo: 0,
    },
    cart: [],
    User: "",
    paymentInfo: {
      id: "",
      status: "",
    },
    paidAt: new Date(),

    itemsPrice: 0,
    taxPrice: 0,
    shippingPrice: 0,
    totalPrice: 0,
    orderStatus: "",
    deliveredAt: new Date(),
    createdAt: new Date(),

  }

  // const proceedToCheckout = () => {
  //   axios.post("http://localhost:5000/api/v1/order/new")



  //   console.log("to checkout" + JSON.stringify(userInfoTokenObject.idtoken))
  // }
  return (
    <div className='cartpage'>
      <Container >
        <Row>
          <Col>
            {cart.map((product) => {
              return (
                <>
                  <Container className='cartContainer'>
                    <Row className='cartItems'>
                      <Col>
                        <h5>{product.productName}</h5>
                        <img className="cartlistimage" src={product.image} alt="..." />

                      </Col>
                      <Col>
                        <h5>price:{product.price}Rs</h5>
                        <h5>Quantity:</h5>
                      </Col>
                      <Col>
                        <Button variant='success' onClick={() => dispatch(deleteFromCartList(product))}>Remove</Button>
                      </Col>
                    </Row>
                  </Container>
                </>
              );
            })}
          </Col>
          <Col className='proceedBtn'>
            <h5>Total Price: {cart.reduce((accum, obj) => accum + obj.price, 0)}</h5>
            <h5>Total Items:  {Object.keys(cart).length}</h5>

            <Button variant='success' type='button' onClick={() => dispatch(saveMyFavoritesToCart(userInfoTokenObject.idtoken, orderDetails))}>

              Proceed To Checkout</Button>
            <h5>Or</h5>
            <Button variant='success' onClick={() => navigate("/products")}>Continue to Shopping</Button>

          </Col>
        </Row>
      </Container>
    </div>
  )
};

