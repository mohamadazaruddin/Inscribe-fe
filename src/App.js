import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import LandingPage from "./pages/landing-screen";
import "./styles/App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Fragment } from "react";
import { CookiesProvider, useCookies } from "react-cookie";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./services/context/AuthContext";
function App() {
  return (
    <div className="h-screen overflow-y-auto w-full">
      <AppRoutes />
    </div>
  );
}

function AppRoutes() {
  return (
    <Fragment>
      <ToastContainer />
      <AuthProvider>
        <CookiesProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
          </Routes>
        </CookiesProvider>
      </AuthProvider>
    </Fragment>
  );
}

const PrivateRoute = ({ children }) => {
  const [cookies] = useCookies(["user"]);
  return cookies.token ? children : <Navigate to="/login" />;
};

export default App;
