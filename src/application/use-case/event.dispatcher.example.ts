import OrderPlacedEvent from "../../domain/entity/product-purchased";
import NotificationHandler from "../../infra/notification.system";
import StockHandler from "../../infra/inventory.system";
import EventDispatcher from "../events/event-dispatcher";

export class EventDispatcherExample {
    private eventDispatcher: EventDispatcher;
    private stockHandler: StockHandler;
    private notificationHandler: NotificationHandler;

    constructor(eventDispatcher: EventDispatcher) {
        this.eventDispatcher = eventDispatcher;
        this.stockHandler = new StockHandler();
        this.notificationHandler = new NotificationHandler();
    }

    async execute(orderPlacedEvent: OrderPlacedEvent) {
        this.eventDispatcher.register(OrderPlacedEvent.name, this.stockHandler);
        this.eventDispatcher.register(OrderPlacedEvent.name, this.notificationHandler);
        // poderia ser um agreggate ou caso de uso sendo chamado aqui
        
        this.eventDispatcher.notify(orderPlacedEvent);
    }
}