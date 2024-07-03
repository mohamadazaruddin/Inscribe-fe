import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };
  return (
    <div className="bg-primary-200 h-full px-5 py-10 flex items-center justify-center">
      <div className="mx-auto py-6  px-4 w-full  bg-white shadow-md rounded ">
        <img
          src="/assets/images/appLogo.svg"
          alt="logo"
          className="w-[100px] mx-auto"
        />
        {/* form */}
        <form onSubmit={handleLogin} className="mt-8">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="block w-full text-center bg-primary-500 rounded-full py-2 text-md font-medium text-contrast-200"
          >
            Log In
          </button>
          <div className="text-xs text-right mt-1">
            Not Registered Yet ?{" "}
            <Link to="/signup" className="text-primary-500">
              {" "}
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
