export default function Listpro({ products }) {
  return (
    <div className="main">
      <img
        src={`/${products.image}`}
        alt=" product 1"
        className="product-img"
      />
      <p>{products.name}</p>
      <img
        src={`/images/ratings/rating-${products.rating.stars * 10}.png`}
        alt=""
        className="rating-img"
      />
      <p></p>
      <select>
        <option value="1">1</option>
      </select>
      <button className="addcart">Add To Cart</button>
    </div>
  );
}
