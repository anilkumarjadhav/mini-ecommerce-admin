import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncUpdateUser } from "../store/actions/userActions";
import { Suspense, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "../api/AxiosConfig";

const Products = () => {
  const { users } = useSelector((state) => state.userReducer);
  //   const { products } = useSelector((state) => state.productReducer);
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
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
        setProducts([...products, ...data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
          <button onClick={() => addToCartHandler(product)}>Add to Cart</button>
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

  return (
    <div>
      <InfiniteScroll
        dataLength={products.length}
        next={fetchProducts}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="flex flex-row flex-wrap gap-5">
          <Suspense
            fallback={
              <h1 className="text-center text-5xl text-yellow-500">
                LOADING RE BABA...
              </h1>
            }
          >
            {renderProducts}
          </Suspense>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Products;
