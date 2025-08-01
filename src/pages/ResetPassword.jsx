import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { Input } from "../components/Input";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { ErrorText } from "../components/ErrorText";

export function ResetPassword() {
  document.title = "Reset Password - Sincerely, Me";
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = hashParams.get("access_token");

    if (!accessToken) {
      setError("Invalid reset link. Please request a new password reset.");
    }
  }, []);

  async function handleResetPassword(event) {
    event.preventDefault();
    setLoading(true);
    setError("");

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) {
        setError(error.message);
      } else {
        alert("Password updated successfully!");
        navigate("/login");
      }
    } catch (error) {
      setError("An error occurred while updating your password");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen select-none">
      <div className="flex justify-center items-center gap-2 sm:mt-5 sm:mb-10">
        <img src="/images/logo.png" className="w-10"></img>
        <p className="sm:text-xl">Sincerely, Me</p>
      </div>

      <div className="flex flex-col sm:w-180 gap-8 sm:gap-12 mx-auto sm:pb-10 soft-popup">
        <Form
          greeting="Reset Your Password"
          subGreeting="Enter your new password"
          submitLabel={loading ? "Updating..." : "Update Password"}
          handleSubmit={handleResetPassword}
          isReset={true}
          children={
            <>
              <Input
                type="password"
                label="new password"
                placeholder="Enter new password"
                required={true}
                isPassword={true}
                handleInputChange={(e) => setNewPassword(e.target.value)}
              />
              <Input
                type="password"
                label="confirm password"
                placeholder="Confirm new password"
                required={true}
                isPassword={true}
                handleInputChange={(e) => setConfirmPassword(e.target.value)}
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
