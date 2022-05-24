import { orderType } from "../redux/Actions/productActions";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_TO_MYFAVORITES = "ADD_TO_MYFAVORITES";
export const SAVE_MYFAVORITES_TO_CART = "SAVE_MYFAVORITES_TO_CART";
export const SEARCH_KEYWORD = "SEARCH_KEYWORD";
export const DELETE_FROM_MYFAVORITES = "DELETE_FROM_MYFAVORITES";
export const SORT_BY_PRODUCT = "SORT_BY_PRODUCT";
export const SORT_BY_PRICE = "SORT_BY_PRICE";
export const SORT_BY_CATEGORY = "SORT_BY_CATEGORY";

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

export type Order = {
  shippingAddress: shipping_address;
  orderItems: orderItems;
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

export type Product = {
  id: number;
  productName: string;
  image: string;
  productCode: number;
  category: string;
  description: string;
  price: number;
  rating: number;
  isAvailable: boolean;
  color: string[];
};
export type CartdataAndAccessToken = {
  accesstoken: string;
  orderDetails: orderType;
};

export type GetProducts = {
  type: "GET_PRODUCTS";
  payload: Product[];
};
export type AddToMyFavorites = {
  type: "ADD_TO_MYFAVORITES";

  payload: {
    product: Product;
  };
};
export type SaveMyFavoritesToCart = {
  type: "SAVE_MYFAVORITES_TO_CART";

  payload: {
    orderAndAccessToken: CartdataAndAccessToken;
  };
};

export type SortByProduct = {
  type: "SORT_BY_PRODUCT";
  payload: boolean;
};
export type SortByPrice = {
  type: "SORT_BY_PRICE";
  payload: boolean;
};
export type SortByCategory = {
  type: "SORT_BY_CATEGORY";
  payload: boolean;
};
export type SearhForKeyword = {
  type: "SEARCH_KEYWORD";
  payload: string;
};
export type DeleteFromCartList = {
  type: "DELETE_FROM_MYFAVORITES";
  payload: {
    product: Product;
  };
};

export type ProductActions =
  | SaveMyFavoritesToCart
  | GetProducts
  | AddToMyFavorites
  | SortByProduct
  | SortByPrice
  | SearhForKeyword
  | DeleteFromCartList
  | SortByCategory;
