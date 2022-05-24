import axios from 'axios'
import { Product, ProductActions } from '../../Types/productTypes'

export type InitialState = {
  products: Product[]
  cart: Product[]
  keyword: string
  productsort: boolean
  categorysort: boolean
  price: boolean
  filteredData: Product[]
  theme: string
}
const initialState: InitialState = {
  keyword: '',
  products: [],
  cart: [],
  theme: 'light',
  productsort: true,
  categorysort: true,
  price: true,
  filteredData: [],
}
export default function productReducer(
  state = initialState,
  action: ProductActions
): InitialState {
  switch (action.type) {
    case 'GET_PRODUCTS': {
      return {
        ...state,
        products: action.payload,
      }
    }
    case 'SEARCH_KEYWORD': {
      const keyword = action.payload
      let products = state.products.filter((product) => {
        return (
          product.productName.toLowerCase().search(keyword.toLowerCase()) !== -1
        )
      })
      return {
        ...state,
        filteredData: products,
        keyword: keyword,
      }
    }
    case 'ADD_TO_MYFAVORITES': {
      const { product } = action.payload
      return {
        ...state,
        cart: [...state.cart, product],
      }
    }
    case 'DELETE_FROM_MYFAVORITES': {
      const { product } = action.payload
      return {
        ...state,
        cart: state.cart.filter(function (item) {
          return item !== product
        }),
      }
    }
    case 'SAVE_MYFAVORITES_TO_CART': {
      const { orderDetails } = action.payload.orderAndAccessToken
      const { accesstoken } = action.payload.orderAndAccessToken

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + accesstoken,
        },
      }
      const order3: any = {
        itemsPrice: 6,
        taxPrice: 0,
        shippingPrice: 660,
        totalPrice: 0,
        orderStatus: 'Processing',
        paidAt: '2022-04-17T18:16:52.875Z',
        shippingAddress: [
          {
            address: 'kkr',
            city: 'ssr',
            state: 'ap',
            country: 'in',
            pincode: 123456,
            phoneNo: 12345,
          },
        ],
        orderItems: [
          {
            name: 'shoe',
            price: 230,
            quantity: 3,
            image: 'string',
            product: 'shoes',
          },
          {
            name: 'ring',
            price: 250,
            quantity: 5,
            image: 'string',
            product: 'rings',
          },
        ],
        createdAt: '2022-04-17T18:16:52.885Z',
      }
      let postingStatus = false
      axios
        .post('http://localhost:5000/api/v1/order/new', order3, config)
        .then((res) => {
          console.log('orderstatus' + JSON.stringify(res))
          postingStatus = true
        })
        .catch((err) => {
          console.log(err)
        })

      return {
        ...state,
      }
    }
    case 'SORT_BY_PRODUCT':
      return {
        ...state,
        products: action.payload
          ? [...state.products].sort((a, b) =>
              a.productName.toLowerCase() > b.productName.toLowerCase() ? 1 : -1
            )
          : [...state.products]?.sort((a, b) =>
              a.productName.toLowerCase() < b.productName.toLowerCase() ? 1 : -1
            ),
        productsort: !state.productsort,
      }

    case 'SORT_BY_PRICE':
      return {
        ...state,
        products: action.payload
          ? [...state.products].sort((a, b) => (a.price > b.price ? 1 : -1))
          : [...state.products]?.sort((a, b) => (a.price < b.price ? 1 : -1)),
        price: !state.price,
      }
    case 'SORT_BY_CATEGORY':
      return {
        ...state,
        products: action.payload
          ? [...state.products].sort((a, b) =>
              a.category.toLowerCase() > b.category.toLowerCase() ? 1 : -1
            )
          : [...state.products]?.sort((a, b) =>
              a.category.toLowerCase() < b.category.toLowerCase() ? 1 : -1
            ),
        categorysort: !state.categorysort,
      }
    default:
      return state
  }
}
