import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { asyncLogoutUser } from "../store/actions/userActions";

const Nav = () => {
  const user = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(asyncLogoutUser());
    navigate("/login");
  };
  return (
    <nav className="flex justify-center items-center gap-x-5 p-4 mb-10">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">products</NavLink>

      {user ? (
        <>
          <NavLink to="/admin/create-product">Create Product</NavLink>
          <button onClick={logoutHandler}>Logout</button>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
        </>
      )}

      {/*  <NavLink to="/cart">cart</NavLink> */}

      {/*   <NavLink to="/admin/update-product/:id">Update Product</NavLink>
      <NavLink to="/admin/delete-product/:id">Delete Product</NavLink> */}
    </nav>
  );
};

export default Nav;
