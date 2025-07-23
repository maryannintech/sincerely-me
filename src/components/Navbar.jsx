import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="relative z-50 flex sm:flex-col justify-center items-center sm:items-start sm:gap-10 mb-10 sm:mb-0 sm:pl-10 sm:pt-5">
      <div>
        <img src="/images/logo.png" className="hidden sm:block w-15 "></img>
      </div>
      <div className="text-[var(--primary-color)] sm:text-4xl text-3xl flex sm:flex-col justify-center gap-7 sm:gap-3 fixed bottom-0 sm:top-0 py-3 bg-[var(--cream-color)] sm:bg-transparent border-t-2 sm:border-0 border-[var(--primary-color)] w-full sm:w-auto">
        <Link to={"/app/dashboard"}>
          <i className="bx  bxs-home-heart cursor-pointer"></i>
        </Link>
        <Link to={"/app/write"}>
          <i className="bx  bxs-plus-square cursor-pointer"></i>
        </Link>
        <Link to={"/app/all-letters"}>
          <i className="bx  bxs-grid-search cursor-pointer"></i>
        </Link>
        <Link to={"/app/about"}>
          <i className="bx  bxs-info-circle cursor-pointer"></i>
        </Link>
        <Link to={"/signin"}>
        <i className='bx  bx-arrow-out-up-square-half rotate-90'  ></i> 
        </Link>
      </div>
    </div>
  );
}
