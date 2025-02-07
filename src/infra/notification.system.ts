import EventHandlerInterface from "../domain/ports/event-handler.interface";
import ProductPurchasedEvent from "../domain/entity/product-purchased";

export default class NotificationHandler
  implements EventHandlerInterface<ProductPurchasedEvent>
{
  handle(event: ProductPurchasedEvent): void {
    console.log("Sending email for: ", event.userEmail);
  }
}