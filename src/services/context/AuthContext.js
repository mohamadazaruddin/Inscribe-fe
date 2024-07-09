import React, { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const navigate = useNavigate();

  const login = async (data) => {
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/users/login`, {
        username: data.username,
        password: data.password,
      })
      .then(function (response) {
        if (response.data) {
          setCookie("user", response.data.loggedInuser, {
            path: "/",
            maxAge: 18000,
          });
          setCookie("token", response.data.token, {
            path: "/",
            maxAge: 18000,
          });
          window.location.href = "/home";
        }
      })

      .catch(function (err) {
        toast.error(`${err.response.data.message}`, {
          autoClose: 3000,
        });
      });
  };

  const logout = () => {
    removeCookie(["user"]);
    removeCookie(["token"]);
    navigate("/login");
    toast.success(`Logout Successfully`, {
      autoClose: 1000,
    });
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
