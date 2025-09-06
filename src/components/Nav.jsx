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
          {user && user.isAdmin && (
            <NavLink to="/admin/create-product">Create Product</NavLink>
          )}
          <NavLink to="/admin/user-profile">Settings</NavLink>
          <NavLink to="/cart">Cart</NavLink>
          {/*  <button onClick={logoutHandler}>Logout</button> */}
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
        </>
      )}

      {/*  <NavLink to="/cart">cart</NavLink> */}

    </nav>
  );
};

export default Nav;
