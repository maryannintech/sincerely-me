import { Input } from "../components/Input";
import { SubmitButton } from "../components/SubmitButton";

export function SignIn() {
  document.title = "Sign In - Sincerely, Me";
  return (
    <div className="flex flex-wrap gap-5 sm:gap-0">
      <div>
        <div className="sm:w-160 h-50 sm:h-screen w-screen flex flex-col justify-center">
          <div className="bg-[var(--primary-color)] h-screen sm:h-165 sm:ml-5 flex flex-col justify-center items-center sm:rounded-lg">
            <img
              src="src\assets\images\envelope.png"
              className="w-50 sm:w-sm"
            ></img>
            <p className="text-center sm:text-2xl text-[var(--cream-color)]">
              made by{" "}
              <a href="https://github.com/maryannintech" target="_blank">
                maryannintech
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:w-180 gap-8 sm:gap-12 mx-auto">
        <div className="flex justify-center sm:justify-end items-center gap-2 sm:mt-5">
          <img src="src\assets\images\logo.png" className="w-10"></img>
          <p className="sm:text-xl">Sincerely, Me</p>
        </div>
        <div>
          <form>
            <p className="text-3xl sm:text-5xl text-center">Welcome</p>
            <p className="text-xl sm:text-3xl text-center">
              Let’s create your account
            </p>
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
            <p className="text-end mt-2 sm:text-xl mb-5 sm:mb-8">forgot password?</p>
            <SubmitButton label="Sign In" />
          </form>
          <p className="text-center my-4 sm:text-xl">Already have an account?<br></br> <a href="#" className="text-[var(--primary-color)]">Sign In</a></p>
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="bg-[#CC7676] w-5 h-5 p-4 rounded-full opacity-50"></div>
            <div className="bg-[#CC7676] w-5 h-5 p-4 rounded-full opacity-80"></div>
            <div className="bg-[#CC7676] w-5 h-5 p-4 rounded-full"></div>
          </div>
        </div>
      </div> 
    </div>
  );
}
