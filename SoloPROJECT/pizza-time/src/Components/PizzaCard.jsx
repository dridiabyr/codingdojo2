const PizzaCard = ({ pizza }) => (
  <div className="border p-4 rounded shadow">
    <h3 className="font-bold">{pizza.size} Pizza</h3>
    <p>Crust: {pizza.crust}</p>
    <p>Toppings: {pizza.toppings.join(', ')}</p>
    <p>Price: ${pizza.price}</p>
  </div>
);

export default PizzaCard;
