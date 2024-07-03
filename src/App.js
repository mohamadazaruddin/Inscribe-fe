import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/home";
import "./styles/App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Fragment } from "react";

function App() {
  return (
    <>
      <AppRoutes />
      {window.location.href === "/" && <LandingPage />}
    </>
  );
}

function AppRoutes() {
  return (
    <Fragment>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Dashboard />} />
      </Routes>
    </Fragment>
  );
}

function LandingPage() {
  return (
    <div className="bg-white h-full bg-[url('../../public/assets/images/landing.png')] bg-center bg-cover bg-no-repeat flex flex-col justify-end px-5 py-10 ">
      <div className="mx-auto text-center">
        <div className="text-2xl text-black font-medium">
          Share Your Thoughts
        </div>
        <div className="text-sm text-primary-400 mt-4">
          Create And Share Your Thoughts Without <br />
          Sharing your Identity
        </div>
      </div>
      <div className="mt-8 w-full">
        <Link
          to="/signup"
          className="block text-center bg-primary-500 rounded-full py-2 text-md font-medium text-contrast-200"
        >
          Sign up
        </Link>
        <Link
          to="/login"
          className="block text-center text-primary-500 rounded-full py-2 text-md font-medium border border-primary-500 bg-contrast-200 mt-4"
        >
          Log in
        </Link>
      </div>
    </div>
  );
}
export default App;
