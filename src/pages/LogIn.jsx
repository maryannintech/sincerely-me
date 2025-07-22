import { Input } from "../components/Input";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";

export function LogIn() {
  document.title = "Log In - Sincerely, Me";
  return (
    <div className="flex flex-col justify-center items-center min-h-screen select-none">
      <div className="flex justify-center items-center gap-2 sm:mt-5">
        <img src="/images/logo.png" className="w-10"></img>
        <p className="sm:text-xl">Sincerely, Me</p>
      </div>
      <div className="flex flex-col sm:w-180 gap-8 sm:gap-12 mx-auto sm:pb-10 soft-popup">
        <Form
          greeting="Welcome back!"
          subGreeting="Enter your details"
          submitLabel="Log In"
          bottomLabel="Sign In"
          bottomQuestion="Don't have an account?"
          bottomLink="/"
          isLogin={true}
          children={
            <>
              <Input
                type="email"
                label="email"
                placeholder="Enter your email"
                required={true}
              />
              <Input
                type="password"
                label="password"
                placeholder="Enter your password"
                required={true}
                isPassword={true}
              />
            </>
          }
        />
      </div>
      <Footer />
    </div>
  );
}
