import React, { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const navigate = useNavigate();

  const login = async (data) => {
    try {
      axios
        .post(`${process.env.REACT_APP_API_BASE_URL}/users/login`, {
          username: data.username,
          password: data.password,
        })
        .then(function (response) {
          setCookie("user", response.data.user, { path: "/", maxAge: 2592000 });
          setCookie("token", response.data.token, { path: "/" });
          navigate("/home");
          return;
        })
        .catch(function (err) {
          console.log(err, "err");
        });
    } catch (err) {}
  };

  const logout = () => {
    removeCookie(["user"]);
    removeCookie(["token"]);
    navigate("/login");
  };

  const value = {
    login,
    logout,
  };

  useEffect(() => {
    if (cookies) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${cookies.token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [cookies, navigate]);

  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  );
};
export default AuthContext;
