import { Link } from "react-router-dom";

export function Form({
  greeting,
  subGreeting,
  children,
  submitLabel,
  bottomQuestion,
  bottomLabel,
  bottomLink = "#",
  isLogin = false,
  isReset = false,
  handleSubmit,
  forgotPassword
}) {
  return (
    <>
      <form
        className="mt-1 sm:mt-0 px-3 sm:px-0"
        style={isLogin ? { marginTop: "20px" } : {}}
        onSubmit={handleSubmit}
      >
        <p className="text-3xl sm:text-5xl text-center">{greeting}</p>
        <p className="text-xl sm:text-3xl text-center">{subGreeting}</p>
        <div className="border-1 border-[#CC7676] my-2 sm:my-5"></div>
        {children}
        <p className="text-end mt-2 sm:text-xl mb-5 sm:mb-8 hover:underline cursor-pointer" onClick={forgotPassword}>
          {isLogin ? "forgot your password?" : ""}
        </p>
        {!isLogin && isReset && (
          <div className="flex justify-center gap-2 text-center mb-5">
            <input
              type="checkbox"
              id="privacy-agreement"
              required
              className="mt-1"
            />
            <label htmlFor="privacy-agreement" className="sm:text-lg">
              I agree to the{" "}
              <Link
                to="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--primary-color)] underline"
              >
                Privacy Policy
              </Link>{" "}
              and
              <Link
                to="/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--primary-color)] underline"
              >
                {" "}
                Terms of Service
              </Link>
            </label>
          </div>
        )}
        <button
          type="submit"
          className="bg-[var(--primary-color)] text-[var(--cream-color)] py-2 sm:py-3 px-4 sm:px-6 rounded-md sm:text-xl w-full hover:bg-[var(--light-pink)] transition-colors duration-300"
        >
          {submitLabel}
        </button>
      </form>

      <p className="text-center sm:text-xl mt-2 sm:mt-4">
        {bottomQuestion}
        <br></br>{" "}
        <a href={bottomLink} className="text-[var(--primary-color)]">
          {bottomLabel}
        </a>
      </p>
    </>
  );
}
