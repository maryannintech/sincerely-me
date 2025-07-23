import { Link } from "react-router-dom";
export function SeeMoreButton({ onClick }) {
  return (
    <>
      <Link to={"/app/all-letters"}>
        <button className="cursor-pointer bg-[var(--primary-color)] text-[var(--cream-color)] py-1 px-4 rounded-md mb-5 sm:mb-10 sm:text-lg hover-lift hover-glow hover:bg-[var(--light-pink)] transition-all duration-300">
          See more
        </button>
      </Link>
    </>
  );
}
