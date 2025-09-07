import { lazy, Suspense, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import useInfiniteProducts from "../utils/useInfiniteProducts";
const ProductTemplate = lazy(() => import("../components/ProductTemplate"));

const Products = () => {
  const { products, hasMore, fetchProducts } = useInfiniteProducts();

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
          {products.map((product) => (
            <Suspense
              key={product?.id}
              fallback={
                <h1 className="text-center text-5xl text-yellow-500">
                  LOADING RE BABA...
                </h1>
              }
            >
              <ProductTemplate key={product?.id} product={product} />
            </Suspense>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Products;
