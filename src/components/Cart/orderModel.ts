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

export type OrderDocument = {
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

export default OrderDocument;
