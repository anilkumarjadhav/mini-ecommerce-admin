import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  asyncDeleteProduct,
  asyncUpdateProduct,
} from "../../store/actions/productActions";

const ProductDetails = () => {
  const { id } = useParams();
  const {
    userReducer: { users },
    productReducer: { products },
  } = useSelector((state) => state);
  const product = products?.find((product) => product.id == id);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      image: product?.image,
      title: product?.title,
      price: product?.price,
      category: product?.category,
      description: product?.description,
    },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateProductHandler = (product) => {
    dispatch(asyncUpdateProduct(id, product));
  };

  const deleteHandler = () => {
    dispatch(asyncDeleteProduct(id));
    navigate("/products");
  };

  return product ? (
    <>
      <div className="w-full flex">
        <img
          className="w-1/2 h-[50vh] object-cover"
          src={product.image}
          alt=""
        />
        <div className="w-1/2 h-1/2 px-3">
          <h1 className="text-5xl mb-5 font-thin">{product.title}</h1>
          <p className="text-3xl font-thin mb-1">Rs {product.price}</p>
          <p className="text-3xl font-thin">{product.description}</p>
          <button>Add to cart</button>
        </div>
      </div>
      <hr className="my-10" />
      <h1 className="text-5xl mb-10">Update Product</h1>

      {users && users?.isAdmin && (
        <form
          onSubmit={handleSubmit(updateProductHandler)}
          className="flex flex-col w-full justify-start items-start"
        >
          <input
            {...register("image")}
            className="outline-0 border-b p-2 text-4xl mb-3"
            type="url"
            placeholder="Image Url"
          />

          <input
            {...register("title")}
            className="outline-0 border-b p-2 text-4xl mb-3"
            type="text"
            placeholder="Product Name"
          />

          <input
            {...register("price")}
            className="outline-0 border-b p-2 text-4xl mb-3"
            type="number"
            placeholder="Amount"
          />

          <textarea
            {...register("description")}
            className="outline-0 border-b p-2 text-4xl mb-3"
            placeholder="Enter Description"
          ></textarea>

          <input
            {...register("category")}
            className="outline-0 border-b p-2 text-4xl mb-3"
            type="text"
            placeholder="Category name"
          />

          <button className="mt-5 px-4 py-2 bg-blue-400 rounded">
            Update Product
          </button>

          <button
            type="button"
            onClick={deleteHandler}
            className="mt-5 px-4 py-2 bg-red-400 rounded"
          >
            Delete Product
          </button>
        </form>
      )}
    </>
  ) : (
    "Loading..."
  );
};

export default ProductDetails;
