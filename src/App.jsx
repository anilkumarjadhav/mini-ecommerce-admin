import { useEffect } from "react";
import Nav from "./components/Nav";
import MainRoutes from "./routes/MainRoutes";
import { useDispatch } from "react-redux";
import { asyncCurrentUser } from "./store/actions/userActions";
import { asyncLoadProducts } from "./store/actions/productActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncLoadProducts());
    dispatch(asyncCurrentUser());
  }, []);

  return (
    <div className="text-white w-screen h-screen px-[10%] bg-gray-800 overflow-auto">
      <Nav />
      <MainRoutes />
    </div>
  );
};

export default App;
