import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
// import useToken from "../../CustomHooks/useToken";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, loginWithGoogle, updateUser } = useContext(AuthContext);

  const [signupError, setSignupError] = useState("");
  // const [createdUserEmail, setCreatedUserEmail] = useState('');

  // const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  // if(token){
  //   navigate('/');
  // }

  const handleSignUp = (data) => {
    setSignupError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User created successfully.");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => {
        console.error(err.message);
        setSignupError(err.message);
      });
  };

  const handleSignupWithGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User created successfully");
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  const saveUser = (name, email) => {
    const user = { name, email };

    fetch("https://doctors-portal-server-eta-red.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/");
        // setCreatedUserEmail(email);
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-4xl text-center mb-8">Sign Up</h2>
        <form className="mb-6" onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "name is required",
              })}
              className="input input-bordered w-full"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "email is required",
              })}
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 character",
                },
                pattern: {
                  value: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
                  message:
                    "Password must have uppercase, number and special character",
                },
              })}
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            {signupError && <p className="text-red-600">{signupError}</p>}
          </div>
          <input
            className="btn btn-accent w-full mt-6"
            value="Sign Up"
            type="submit"
          />
        </form>
        <p>
          Already have an Account
          <Link className="text-secondary" to="/login">
            {" "}
            Please Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button
          onClick={handleSignupWithGoogle}
          className="btn btn-outline w-full"
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
