import { useDispatch, useSelector } from "react-redux";
import { asyncUpdateUser } from "../store/actions/userActions";

const Cart = () => {
  const { users } = useSelector((state) => state.userReducer);
  const { products } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  const increaseQuantityHandler = (index, product) => {
    let copyUser = structuredClone(users);
    copyUser.cart[index].quantity += 1;
    dispatch(asyncUpdateUser(copyUser.id, copyUser));
  };
  const decreaseQuantityHandler = (index, product) => {
    const copyUser = structuredClone(users);
    if (users.cart[index].quantity > 1) {
      copyUser.cart[index].quantity -= 1;
    } else {
      copyUser.cart.splice(index, 1);
      dispatch(asyncUpdateUser(copyUser.id, copyUser));
    }
    dispatch(asyncUpdateUser(copyUser.id, copyUser));
  };

  const cartItems = users.cart.map((c, index) => {
    return (
      <li
        className="flex items-center justify-between mb-10 border-2 p-5 bg-pink-500"
        key={c?.product?.id}
      >
        <img
          className=" mr-10 w-[7vmax] h-[10vmax]"
          src={c?.product?.image}
          alt=""
        />
        <span> {c?.product?.title}</span>
        <span>{c?.product?.price}</span>
        <p>
          <button
            onClick={() => decreaseQuantityHandler(index, c)}
            className="text-xl p-5"
          >
            -
          </button>
          <span className="mx-3 p-1 rounded bg-gray-700">{c.quantity}</span>
          <button
            onClick={() => increaseQuantityHandler(index, c)}
            className="text-xl p-5"
          >
            +
          </button>
        </p>
      </li>
    );
  });

  return <ul>{cartItems}</ul>;
};

export default Cart;
