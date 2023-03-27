import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
// import useToken from "../../CustomHooks/useToken";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { login, loginWithGoogle } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  // const [loginUserEmail, setLoginUserEmail] = useState('');

  // const [token] = useToken(loginUserEmail);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  // if (token) {
  //   navigate(from, { replace: true });
  // }

  const handleLogin = (data) => {
    console.log(data);
    setLoginError('');
    login(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        // setLoginUserEmail(data.email);
        navigate(from, { replace: true });
      })
      .catch(err => {
        console.log(err.message);
        setLoginError(err.message);
      });
  };

  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-4xl text-center mb-8">Login</h2>
        <form className="mb-6" onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 character",
                },
              })}
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}

            {loginError && <p className="text-red-600">{loginError}</p>}

            <label className="label">
              <span className="label-text">Forgot Password ?</span>
            </label>
          </div>

          <input
            className="btn btn-accent w-full mt-2"
            value="Login"
            type="submit"
          />
        </form>
        <p>
          New to Doctors Portal{" "}
          <Link className="text-secondary" to="/signup">
            Create new Account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button
          onClick={handleLoginWithGoogle}
          className="btn btn-outline w-full"
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
