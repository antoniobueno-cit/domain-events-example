import EventInterface from "./event.interface";

export default class ProductPurchasedEvent implements EventInterface {
  userEmail: string;
  productId: string;
  quantity: number;
  price: number;

  constructor(userEmail:string, productId: string, quantity: number, price: number) {
    this.userEmail = userEmail;
    this.productId = productId;
    this.quantity = quantity;
    this.price = price;
  }
}