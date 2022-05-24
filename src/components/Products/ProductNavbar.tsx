import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsCartCheckFill } from "react-icons/bs";
import { Col, Container, Dropdown, Row } from "react-bootstrap";

import { rootState } from "../../redux/reducers";
import { searchForKeyword } from "../../redux/Actions/productActions";
import { sortByPrice, sortByProduct, sortByCategory } from "../../redux/Actions/productActions";
import "./Products.css"

export default function ProductNavbar() {
    const { keyword } = useSelector((state: rootState) => state.productReducer);
    const { cart } = useSelector((state: rootState) => state.productReducer);
    const { productsort } = useSelector((state: rootState) => state.productReducer);
    const { categorysort } = useSelector((state: rootState) => state.productReducer);
    const { price } = useSelector((state: rootState) => state.productReducer);
    const dispatch = useDispatch();
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(searchForKeyword(evt.target.value));
    };
    return (
        <Container className='productNavBar'>
            <Row>
                <Col>
                    <input
                        className="navbarsection"
                        type="text"
                        placeholder="Search for Recipe"
                        onChange={handleChange}
                        value={keyword}
                    />
                </Col>
                <Col>
                    <Dropdown>
                        <Dropdown.Toggle className="toggle" >Sort by</Dropdown.Toggle>
                        <Dropdown.Menu className="toggle-item">
                            <Dropdown.Item onClick={() => dispatch(sortByProduct(productsort))}>
                                Product
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => dispatch(sortByPrice(price))}>
                                Price
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => dispatch(sortByCategory(categorysort))}>
                                Category
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col>
                    <Link className='link' to={"/cart"}>
                        <BsCartCheckFill size="2rem" fill='var(--primary-text)' />
                        {Object.keys(cart).length}
                    </Link>
                </Col>
            </Row>
        </Container>

    )
}
