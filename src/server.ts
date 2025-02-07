import express, { Request, Response } from 'express';
import EventDispatcher from './application/events/event-dispatcher';
import OrderPlacedEvent from './domain/entity/product-purchased';
import { EventDispatcherExample } from './application/use-case/event.dispatcher.example';

const app = express();
const port = 3000;

app.use(express.json());

const useCase = new EventDispatcherExample(new EventDispatcher());

app.post("/orders", (req, res) => {
  const { productId, quantity, price, userEmail } = req.body;
  if (!productId || !quantity || !price || !userEmail) {
    res.sendStatus(400)
  }

  try {
    useCase.execute(new OrderPlacedEvent( userEmail ,productId, quantity, price));
    res.sendStatus(200)
  } catch (error) {
    console.error("Error creating order:", error);
    res.sendStatus(500)
  }
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
