import { Input } from "../components/Input";
import { Form } from "../components/Form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";

export function SignIn() {
  document.title = "Sign In - Sincerely, Me";
  let navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    navigate("/app/dashboard");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { session } = UserAuth();
  console.log(session);

  return (
    <div className="flex flex-wrap gap-5 sm:gap-0 select-none">
      <div>
        <div className="sm:w-160 h-50 sm:h-screen w-screen flex flex-col justify-center">
          <div className="bg-[var(--primary-color)] h-screen sm:h-165 sm:ml-5 flex flex-col justify-center items-center sm:rounded-lg">
            <img
              src="public/images/envelope.png"
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
          <img src="/images/logo.png" className="w-10"></img>
          <p className="sm:text-xl">Sincerely, Me</p>
        </div>
        <div className="soft-popup">
          <Form
            greeting="Welcome"
            handleSubmit={handleSubmit}
            subGreeting="Let's create your account"
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
            submitLabel="Sign In"
            bottomLabel="Log In"
            bottomQuestion="Already have an account?"
            bottomLink="/login"
          />
          <div className="flex justify-center items-center gap-2 mb-4 mt-4">
            <div className="bg-[#CC7676] w-5 h-5 p-3 sm:p-4 rounded-full opacity-50"></div>
            <div className="bg-[#CC7676] w-5 h-5 p-3 sm:p-4 rounded-full opacity-80"></div>
            <div className="bg-[#CC7676] w-5 h-5 p-3 sm:p-4 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
