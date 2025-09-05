import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  asyncDeleteUser,
  asyncLogoutUser,
  asyncUpdateUser,
} from "../../store/actions/userActions";

const UserProfile = () => {
  const { users } = useSelector((state) => state.userReducer);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      username: users?.username,
      email: users?.email,
      password: users?.password,
    },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateUserHandler = (user) => {
    dispatch(asyncUpdateUser(users.id, user));
  };

  const logoutUserHandler = () => {
    dispatch(asyncLogoutUser());
    navigate("/login");
  };

  const deleteHandler = () => {
    dispatch(asyncDeleteUser(users.id));
    navigate("/login");
  };
  return users ? (
    <div>
      <form
        onSubmit={handleSubmit(updateUserHandler)}
        className="flex flex-col w-full justify-start items-start"
      >
        <input
          {...register("username")}
          className="outline-0 border-b p-2 text-4xl mb-3"
          type="username"
          placeholder="Enter Username"
        />

        <input
          {...register("email")}
          className="outline-0 border-b p-2 text-4xl mb-3"
          type="email"
          placeholder="Enter Email"
        />

        <input
          {...register("password")}
          className="outline-0 border-b p-2 text-4xl mb-3"
          type="text"
          placeholder="Enter Password"
        />

        <button className="mt-5 px-4 py-2 bg-blue-400 rounded">
          Update User
        </button>

        <button
          type="button"
          onClick={deleteHandler}
          className="mt-5 px-4 py-2 bg-red-400 rounded"
        >
          Delete User
        </button>

        <button
          type="button"
          onClick={logoutUserHandler}
          className="mt-5 px-4 py-2 bg-black rounded"
        >
          Logout
        </button>
      </form>
    </div>
  ) : (
    "Loading..."
  );
};

export default UserProfile;
// deletions code
