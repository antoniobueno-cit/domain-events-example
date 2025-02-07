import EventHandlerInterface from "../../domain/ports/event-handler.interface";
import EventInterface from "../../domain/entity/event.interface";

export default class EventDispatcher {
  private eventHandlers: { [eventName: string]: EventHandlerInterface<EventInterface>[] } = {};

  get getEventHandlers(): { [eventName: string]: EventHandlerInterface<EventInterface>[] } {
    return this.eventHandlers;
  }

  register<T extends EventInterface>(eventName: string, handler: EventHandlerInterface<T>): void {
    if (!this.eventHandlers[eventName]) {
      this.eventHandlers[eventName] = [];
    }
    this.eventHandlers[eventName].push(handler);
  }

  notify(event: EventInterface): void {
    const eventName = event.constructor.name;
    if (this.eventHandlers[eventName]) {
      this.eventHandlers[eventName].forEach((handler) => handler.handle(event));
    }
  }
}