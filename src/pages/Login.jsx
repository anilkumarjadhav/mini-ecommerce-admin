import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { asyncLoginUser } from "../store/actions/userActions";
import { useDispatch } from "react-redux";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const LoginHandler = (user) => {
    dispatch(asyncLoginUser(user));
  };
  return (
    <form
      onSubmit={handleSubmit(LoginHandler)}
      className="flex flex-col w-1/2 justify-start items-start"
    >
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
      <button className="mt-5 px-4 py-2 bg-blue-400 rounded">Login User</button>
      <p className="mt-5">
        Don't have a account?{" "}
        <Link className="text-blue-400" to="/register">
          Register
        </Link>
      </p>
    </form>
  );
};

export default Login;
