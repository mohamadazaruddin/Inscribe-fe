import { Link, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
export default function LandingPage() {
  const [cookies] = useCookies(["user"]);
  return cookies.token ? (
    <Navigate to="/home" />
  ) : (
    <div className="bg-white h-full bg-[url('../../public/assets/images/landing.png')] bg-center bg-cover bg-no-repeat flex flex-col justify-end md:justify-center px-5 py-10 ">
      <div className="mx-auto text-center">
        <div className="text-2xl text-black font-medium md:text-[40px]">
          Share Your Thoughts
        </div>
        <div className="text-sm text-primary-400 mt-4 md:text-lg">
          Create And Share Your Thoughts Without <br />
          Sharing your Identity
        </div>
      </div>
      <div className="mt-8 w-full md:w-[250px] mx-auto">
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
