import EventHandlerInterface from "../domain/ports/event-handler.interface";
import ProductPurchasedEvent from "../domain/entity/product-purchased";

export default class StockHandler
  implements EventHandlerInterface<ProductPurchasedEvent>
{
  handle(event: ProductPurchasedEvent): void {
    console.log("Saving product....: ", event.productId);
  }
}