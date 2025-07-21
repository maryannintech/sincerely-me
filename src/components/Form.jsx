import { SubmitButton } from "./SubmitButton";
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
      <form className="sm:mt-10">
        <p className="text-3xl sm:text-5xl text-center">{greeting}</p>
        <p className="text-xl sm:text-3xl text-center">{subGreeting}</p>
        <div className="border-1 border-[#CC7676] my-2 sm:my-5"></div>
        {children}
        <p className="text-end mt-2 sm:text-xl mb-5 sm:mb-8">
          {isLogin ? "Forgot your password?" : ""}
        </p>
        <SubmitButton label={submitLabel} />
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
