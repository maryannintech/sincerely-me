import { Input } from "../components/Input";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ErrorText } from "../components/ErrorText";
import { useState } from "react";

export function LogIn() {
  document.title = "Log In - Sincerely, Me";
  const { session, signIn } = UserAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [errorTimeout, setErrorTimeout] = useState(null);

  async function handleLogIn(event) {
    event.preventDefault();

    if (errorTimeout) {
      clearTimeout(errorTimeout);
      setErrorTimeout(null);
    }

    try {
      const result = await signIn(email, password);

      if (result.success) {
        navigate("/loading");
        setTimeout(() => {
          navigate("/app/dashboard");
        }, 3000);
      } else {
        setError(result.error || "An error occurred during sign in.");

        const newTimeout = setTimeout(() => {
          setError("");
          setErrorTimeout(null);
        }, 3000);
        setErrorTimeout(newTimeout);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError(result.error || "An error occurred during sign up.");

      const newTimeout = setTimeout(() => {
        setError("");
        setErrorTimeout(null);
      }, 3000);
      setErrorTimeout(newTimeout);
    }
  }

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
          handleSubmit={handleLogIn}
          isLogin={true}
          children={
            <>
              <Input
                type="email"
                label="email"
                placeholder="Enter your email"
                required={true}
                handleInputChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                label="password"
                placeholder="Enter your password"
                required={true}
                isPassword={true}
                handleInputChange={(e) => setPassword(e.target.value)}
              />
              {error && <ErrorText message={error} />}
            </>
          }
        />
      </div>
      <Footer />
    </div>
  );
}
