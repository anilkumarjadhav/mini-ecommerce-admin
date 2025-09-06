import { useEffect } from "react";
import Nav from "./components/Nav";
import MainRoutes from "./routes/MainRoutes";
import { useDispatch, useSelector } from "react-redux";
import { asyncCurrentUser } from "./store/actions/userActions";
import { asyncLoadProducts } from "./store/actions/productActions";

const App = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
  const { products } = useSelector((state) => state.productReducer);

  useEffect(() => {
    !user && dispatch(asyncCurrentUser());
  }, [user]);

  useEffect(() => {
    products.length == 0 && dispatch(asyncLoadProducts());
  }, [products]);

  return (
    <div className="text-white w-screen h-screen px-[10%] bg-gray-800 overflow-auto">
      <Nav />
      <MainRoutes />
    </div>
  );
};

export default App;
