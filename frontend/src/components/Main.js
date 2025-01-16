import Listpro from "./Listpro";
import { products } from "./data/products.js";

export default function Main() {
  return (
    <div className="container">
      {console.log(products)}
      {products.map((product) => (
        <Listpro products={product} key={product.id} />
      ))}
    </div>
  );
}
