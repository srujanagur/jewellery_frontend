import { Dispatch } from "redux";
import {
  CartdataAndAccessToken,
  AddToMyFavorites,
  DeleteFromCartList,
  GetProducts,
  Product,
  SaveMyFavoritesToCart,
  SearhForKeyword,
  SortByCategory,
  SortByPrice,
  SortByProduct,
} from "../../Types/productTypes";
export type shipping_address = {
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: number;
  phoneNo: number;
};
export type orderItems = {
  name: string;
  price: number;
  quantity: number;
  image: string;
  product: string;
};
export type paymentInfo = {
  id: string;
  status: string;
};

export type orderType = {
  shippingAddress: shipping_address;
  cart: Product[];
  User: string;
  paymentInfo: paymentInfo;
  paidAt: Date;
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  orderStatus: string;
  deliveredAt: Date;
  createdAt: Date;
};
const myorder: orderType = {
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
};

export function getproducts(products: Product[]): GetProducts {
  return {
    type: "GET_PRODUCTS",
    payload: products,
  };
}
export function searchForKeyword(keyword: string): SearhForKeyword {
  return {
    type: "SEARCH_KEYWORD",
    payload: keyword,
  };
}
export function addToMyFavorites(product: Product): AddToMyFavorites {
  return {
    type: "ADD_TO_MYFAVORITES",
    payload: {
      product,
    },
  };
}
export function saveMyFavoritesToCart(
  accesstoken1: string,
  orderDetails1: orderType
): SaveMyFavoritesToCart {
  const orderAndAccessToken: CartdataAndAccessToken = {
    accesstoken: accesstoken1,
    orderDetails: orderDetails1,
  };

  return {
    type: "SAVE_MYFAVORITES_TO_CART",
    payload: {
      orderAndAccessToken,
    },
  };
}
export function deleteFromCartList(product: Product): DeleteFromCartList {
  return {
    type: "DELETE_FROM_MYFAVORITES",
    payload: {
      product,
    },
  };
}
export function sortByProduct(productsort: boolean): SortByProduct {
  return {
    type: "SORT_BY_PRODUCT",
    payload: productsort,
  };
}

export function sortByPrice(price: boolean): SortByPrice {
  return {
    type: "SORT_BY_PRICE",
    payload: price,
  };
}
export function sortByCategory(category: boolean): SortByCategory {
  return {
    type: "SORT_BY_CATEGORY",
    payload: category,
  };
}

export function fetchproducts() {
  return (dispatch: Dispatch) => {
    fetch("http://localhost:5000/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        dispatch(getproducts(data));
      });
  };
}
export function savecartonbackend() {
  return (dispatch: Dispatch) => {
    fetch("http://localhost:5000/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        dispatch(getproducts(data));
      });
  };
}
