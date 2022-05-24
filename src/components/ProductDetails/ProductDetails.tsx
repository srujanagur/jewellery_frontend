import React from "react";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from "react-bootstrap";

import { fetchproducts } from "../../redux/Actions/productActions";
import { rootState } from "../../redux/reducers";
import "./ProductDetails.css"

export default function ProductDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchproducts());
  }, [dispatch]);
  const { products } = useSelector((state: rootState) => state.productReducer);
  const { name } = useParams();
  const eachProduct = products.filter(
    (product) => product.productName === name
  );

  return (
    <div className='eachproductdetails'>
      {eachProduct.map((product) => {
        return (
          <Container className="productDescription" >
            <Row >
              <Col lg="6">
                <img className="productImage"
                  src={product.image}
                  alt=""
                />
              </Col >
              <Col lg="6">
                <p>{product.description}</p> <br />
                <h4> Price:{product.price} Rs</h4><br />
                <Button variant="success" onClick={() => navigate("/payment")}>Proceed to payment</Button>
              </Col>
            </Row>
          </Container>
        )
      })
      }
    </div>
  );
}

