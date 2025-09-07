import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncUpdateUser } from "../store/actions/userActions";

const ProductTemplate = ({ product }) => {
  const { users } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    const copyUser = structuredClone(users);
    const x = copyUser.cart.findIndex((c) => c?.product?.id == product.id);
    if (x == -1) {
      copyUser.cart.push({ product, quantity: 1 });
    } else {
      copyUser.cart[x] = {
        product,
        quantity: copyUser.cart[x].quantity + 1,
      };
    }
    console.log(copyUser);
    dispatch(asyncUpdateUser(copyUser.id, copyUser));
  };

  return (
    <div className="w-[23%] m-1 border shadow p-3" key={product?.id}>
      <img
        className="w-full h-[20vh] object-cover"
        src={product?.image}
        alt=""
      />
      <h1>{product?.title}</h1>
      <p>{product?.description?.slice(0, 100)}...</p>
      <div className="mt-3 p-2 flex justify-between items-center">
        <p>{product?.price}</p>
        <button onClick={() => addToCartHandler(product)}>Add to Cart</button>
      </div>
      <Link className="w-full text-center block" to={`/product/${product?.id}`}>
        More Info
      </Link>
    </div>
  );
};

export default ProductTemplate;
