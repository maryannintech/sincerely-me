export function Form({
  greeting,
  subGreeting,
  children,
  submitLabel,
  bottomQuestion,
  bottomLabel,
  bottomLink = "#",
  isLogin = false,
}) {
  return (
    <>
      <form className="mt-5 sm:mt-10">
        <p className="text-3xl sm:text-5xl text-center">{greeting}</p>
        <p className="text-xl sm:text-3xl text-center">{subGreeting}</p>
        <div className="border-1 border-[#CC7676] my-2 sm:my-5"></div>
        {children}
        <p className="text-end mt-2 sm:text-xl mb-5 sm:mb-8">
          {isLogin ? "forgot your password?" : ""}
        </p>
       <button type="submit" className="bg-[var(--primary-color)] text-[var(--cream-color)] py-2 sm:py-3 px-4 sm:px-6 rounded-md text-lg sm:text-xl w-full hover:bg-[var(--light-pink)] transition-colors duration-300">
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
