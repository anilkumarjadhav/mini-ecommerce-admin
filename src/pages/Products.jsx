import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = () => {
  const products = useSelector((state) => state.productReducer.products);

  const renderProducts = products.map((product) => {
    return (
      <div className="w-[23%] m-1 border shadow p-3" key={product.id}>
        <img
          className="w-full h-[20vh] object-cover"
          src={product.image}
          alt=""
        />
        <h1>{product.title}</h1>
        <p>{product.description.slice(0, 100)}...</p>
        <div className="mt-3 p-2 flex justify-between items-center">
          <p>{product.price}</p>
          <button>Add to Cart</button>
        </div>
        <Link
          className="w-full text-center block"
          to={`/product/${product.id}`}
        >
          More Info
        </Link>
      </div>
    );
  });

  return products.length > 0 ? (
    <div className="w-full  flex flex-wrap">{renderProducts}</div>
  ) : (
    "Loading..."
  );
};

export default Products;
