import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncCreateProduct } from "../../store/actions/productActions";

const CreateProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createProductHandler = (product) => {
    product.id = nanoid();
    console.log(product);
    dispatch(asyncCreateProduct(product));
    navigate("/products");
  };
  return (
    <form
      onSubmit={handleSubmit(createProductHandler)}
      className="flex flex-col w-1/2 justify-start items-start"
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
        Create Product
      </button>
    </form>
  );
};

export default CreateProduct;
