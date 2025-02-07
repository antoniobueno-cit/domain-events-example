import ProductPurchasedEventInterface from "./event-handler.interface";
import EventInterface from "../entity/event.interface";

export default interface EventDispatcherInterface<T extends EventInterface> {
  register(eventName: string, handler: ProductPurchasedEventInterface<T>): void;
  notify(event: EventInterface): void;
}
