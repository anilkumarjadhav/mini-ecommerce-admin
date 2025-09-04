import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { asyncRegisterUser } from "../store/actions/userActions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const RegisterHandler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    console.log(user);
    dispatch(asyncRegisterUser(user));
    navigate("/login");
    toast.success("Account created, please login!");
  };
  return (
    <form
      onSubmit={handleSubmit(RegisterHandler)}
      className="flex flex-col w-1/2 justify-start items-start"
    >
      <input
        {...register("username")}
        className="outline-0 border-b p-2 text-4xl mb-3"
        type="username"
        placeholder="username"
      />

      <input
        {...register("email")}
        className="outline-0 border-b p-2 text-4xl mb-3"
        type="email"
        placeholder="email"
      />

      <input
        {...register("password")}
        className="outline-0 border-b p-2 text-4xl mb-3"
        type="password"
        placeholder="password"
      />
      <button className="mt-5 px-4 py-2 bg-blue-400 rounded">
        Register User
      </button>
      <p className="mt-5">
        Already have an account?{" "}
        <Link className="text-blue-400" to="/login">
          Login
        </Link>
      </p>
    </form>
  );
};

export default Register;
