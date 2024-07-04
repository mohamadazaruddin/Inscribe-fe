import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import avatars from "../faceline/faceline.json";
import AuthContext from "../services/context/AuthContext";
export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [stepper, setStepper] = useState(0);
  const [viewpass, setViewpass] = useState(false);
  const { login } = useContext(AuthContext);
  const [profileAvatar, setProfileAvatar] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/users/signup`, {
        username: username,
        password: password,
        profilepicture: profileAvatar,
      })
      .then(function (response) {
        const user = {
          username: username,
          password: password,
        };
        login(user);
      })
      .catch(function (err) {
        console.log(err, "err");
      });
  };

  const ProfileAvatarSelector = () => {
    return (
      <>
        <div
          className="overflow-y-auto h-[300px] mt-10"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#F0F4F8",
          }}
        >
          <div className="grid grid-cols-4 grid-flow-row gap-4">
            {avatars.face.map((item, i) => (
              <div key={i}>
                <img
                  onClick={() => setProfileAvatar(item.avatar)}
                  src={`/assets/images/bitmoji/${item.avatar}`}
                  alt=""
                  className={`${
                    item.avatar === profileAvatar
                      ? "border-2 md:border-[5px] shadow-md border-primary-500 rounded-full"
                      : "border-2 md:border-[5px] border-[#fff] rounded-full"
                  } w-[50px] h-[50px] md:w-[80px] md:h-[80px]`}
                />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => {
            if (profileAvatar.length > 0) {
              setStepper(stepper + 1);
            } else {
              alert("select any Avatar to process");
            }
          }}
          className="block mt-5 w-full text-center bg-primary-500 rounded-full py-2 text-md font-medium text-contrast-200"
        >
          Next
        </button>
      </>
    );
  };

  return (
    <div className="bg-primary-200 h-full px-5 py-10 flex items-center justify-center">
      <div className="mx-auto py-6  px-4 w-full  bg-white shadow-md rounded md:w-[500px] ">
        <img
          src="/assets/images/appLogo.svg"
          alt="logo"
          className="w-[100px] mx-auto"
        />
        {stepper === 0 ? (
          <ProfileAvatarSelector />
        ) : (
          <form onSubmit={handleLogin} className="mt-8">
            <div className="text-center text-[24px] font-semibold"> Log In</div>
            <div className="my-4">
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
            <div className="mb-6 relative">
              <div
                className="absolute top-[35px] right-4"
                onClick={() => setViewpass(!viewpass)}
              >
                view
              </div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type={viewpass ? "password" : "text"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="block w-full text-center bg-primary-500 rounded-full py-2 text-md font-medium text-contrast-200"
            >
              Sign up
            </button>
            <div className="text-xs text-right mt-1">
              Already having an account?
              <Link to="/login" className="text-primary-500">
                Log in
              </Link>
            </div>
          </form>
        )}
        {/* form */}
      </div>
    </div>
  );
}
