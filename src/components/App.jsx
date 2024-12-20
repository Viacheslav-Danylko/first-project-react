import Product from "./Products/Product";
import Message from "./Message/Message";
import { Alert } from "./Alert/Alert";

export default function App() {
  return (
    
    <div>
      <h1>Best selling</h1>

      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <Product
        name="Coca Cola"
        price={1.99}
      />

      <Message text="Куплю праску!" author="Вася" />
      <Message text="Продаю праску!" />
      <Message text="Куплю посудомийку!" author="Ольга" />

      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>
    </div>
  );
}