import { Input } from "../components/Input";
import { SubmitButton } from "../components/SubmitButton";
import { Footer } from "../components/Footer";

export function LogIn() {
  document.title = "Log In - Sincerely, Me";
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex justify-center items-center gap-2 sm:mt-5">
        <img src="src\assets\images\logo.png" className="w-10"></img>
        <p className="sm:text-xl">Sincerely, Me</p>
      </div>
      <div className="flex flex-col sm:w-180 gap-8 sm:gap-12 mx-auto sm:pb-10">
        <form className="mt-10">
          <p className="text-3xl sm:text-5xl text-center">Welcome back</p>
          <p className="text-xl sm:text-3xl text-center">Enter your details</p>
          <div className="border-1 border-[#CC7676] my-2 sm:my-5"></div>
          <Input
            label="email"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <Input
            label="password"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            isPassword={true}
          ></Input>
          <p className="text-end mt-2 sm:text-xl mb-5 sm:mb-8">
            forgot password?
          </p>
          <SubmitButton label="Log In" />
        </form>
        <p className="text-center sm:text-xl">
          Don't have an account?<br></br>{" "}
          <a href="#" className="text-[var(--primary-color)]">
            Log In
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
}
