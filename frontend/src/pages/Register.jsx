import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import API from "../services/api";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      name: "",
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

        await API.post(
          "/auth/register",
          formData
        );

        alert(
          "Registration Successful"
        );

        navigate("/login");

      } catch (error) {

        alert(
          error.response?.data
            ?.message ||
            "Registration Failed"
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
          Create Account
        </h1>

        <form
          onSubmit={
            handleSubmit
          }
          className="space-y-4"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={
              formData.name
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
              ? "Creating..."
              : "Register"}

          </button>

        </form>

        <p
          className="
          text-center
          text-slate-400
          mt-6
        "
        >
          Already have an account?

          <Link
            to="/login"
            className="
            text-blue-400
            ml-2
          "
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;