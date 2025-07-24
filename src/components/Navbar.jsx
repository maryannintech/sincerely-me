import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ErrorText } from "./ErrorText";
import { useState } from "react";


export function Navbar() {
  const [error, setError] = useState("");
  const { session, signOut } = UserAuth();
  let navigate = useNavigate();
  async function handleSignOut() {
    try {
      const result = await signOut();
      if (result.success) {
        navigate("/signin");
      }
    } catch (error) {
      console.log("Error signing out:", error);
      setError("Failed to sign out. Please try again.");
    }
  }
  return (
    <>
    
      <div className="relative z-50 flex sm:flex-col justify-center items-center sm:items-start sm:gap-10 mb-10 sm:mb-0 sm:pl-10 sm:pt-5">
        <div>
          <img src="/images/logo.png" className="hidden sm:block w-15 "></img>
        </div>
        <div className="text-[var(--primary-color)] sm:text-4xl text-3xl flex sm:flex-col justify-center gap-4 sm:gap-3 fixed bottom-0 sm:top-0 pt-3 pb-1 bg-[var(--cream-color)] sm:bg-transparent border-t-2 sm:border-0 border-[var(--primary-color)] w-full sm:w-auto">
          <Link to={"/app/dashboard"}>
            <i className="bx bxs-home-heart cursor-pointer navbar-icon"></i>
          </Link>
          <Link to={"/app/write"}>
            <i className="bx bxs-plus-square cursor-pointer navbar-icon"></i>
          </Link>
          <Link to={"/app/all-letters"}>
            <i className="bx bxs-grid-search cursor-pointer navbar-icon"></i>
          </Link>
          <Link to={"/app/about"}>
            <i className="bx bxs-info-circle cursor-pointer navbar-icon"></i>
          </Link>
          <button onClick={handleSignOut}>
            <i className="bx bx-arrow-out-up-square-half rotate-90 cursor-pointer navbar-icon"></i>
          </button>
        </div>
      </div>
    </>
  );
}
