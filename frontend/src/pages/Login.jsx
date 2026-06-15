import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import API from "../services/api";
import { AuthContext } from "../context/AuthContext";

function Login() {

  const navigate = useNavigate();

  const { login } =
    useContext(AuthContext);

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        const response =
          await API.post(
            "/auth/login",
            formData
          );
          console.log("FULL RESPONSE");
console.log(response.data);

        login(
          response.data.user,
          response.data.token
        );
        console.log(
  "TOKEN SAVED:",
  localStorage.getItem("token")
);

console.log(
  "USER SAVED:",
  localStorage.getItem("user")
);

        navigate("/");

      } catch (error) {

        alert(
          error.response?.data
            ?.message ||
            "Login Failed"
        );

      } finally {

        setLoading(false);

      }

    };

  return (
    <div
      className="
      min-h-screen
      bg-slate-950
      flex
      items-center
      justify-center
      px-4
    "
    >

      <div
        className="
        w-full
        max-w-md
        bg-white/10
        backdrop-blur-xl
        border
        border-white/10
        rounded-3xl
        p-8
      "
      >

        <h1
          className="
          text-3xl
          font-bold
          text-center
          text-white
          mb-6
        "
        >
          Welcome Back
        </h1>

        <form
          onSubmit={
            handleSubmit
          }
          className="space-y-4"
        >

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={
              formData.email
            }
            onChange={
              handleChange
            }
            className="
            w-full
            p-3
            rounded-xl
            bg-slate-900
            border
            border-white/10
            text-white
          "
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={
              formData.password
            }
            onChange={
              handleChange
            }
            className="
            w-full
            p-3
            rounded-xl
            bg-slate-900
            border
            border-white/10
            text-white
          "
          />

          <button
            type="submit"
            disabled={loading}
            className="
            w-full
            py-3
            rounded-xl
            bg-gradient-to-r
            from-blue-500
            to-cyan-500
            text-white
            font-semibold
          "
          >

            {loading
              ? "Logging In..."
              : "Login"}

          </button>

        </form>

        <p
          className="
          text-center
          text-slate-400
          mt-6
        "
        >
          Don't have an account?

          <Link
            to="/register"
            className="
            text-blue-400
            ml-2
          "
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}


export default Login;