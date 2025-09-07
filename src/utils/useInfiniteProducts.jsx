import axios from "../api/AxiosConfig";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadLazyProduct } from "../store/reducers/productSlice";

const useInfiniteProducts = () => {
  const [hasMore, setHasMore] = useState(true);
  const { products } = useSelector((state) => state.productReducer);

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        `/products?_limit=8&_start=${products.length}`
      );
      if (data.length == 0) {
        setHasMore(false);
      } else {
        setHasMore(true);
        dispatch(loadLazyProduct(data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return { products, hasMore, fetchProducts };
};

export default useInfiniteProducts;
