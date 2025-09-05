import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const user = useSelector((state) => state.userReducer.users);

  /*  const logoutHandler = () => {
    dispatch(asyncLogoutUser());
    navigate("/login");
  }; */
  return (
    <nav className="flex justify-center items-center gap-x-5 p-4 mb-10">
      <NavLink to="/">Home</NavLink>

      {user ? (
        <>
          <NavLink to="/admin/create-product">Create Product</NavLink>
          <NavLink to="/admin/user-profile">Settings</NavLink>
          {/*  <button onClick={logoutHandler}>Logout</button> */}
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
