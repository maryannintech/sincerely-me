import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

export function MakeLetter() {
  document.title = "Write a letter - Sincerely, Me";

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { session } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { data, error } = await supabase.from("letters").insert([
        {
          user_id: session?.user?.id,
          title: title,
          content: content,
          delivery_date: deliveryDate,
        },
      ]);

      if (error) {
        setError(error.message);
      } else {
        navigate("/app/dashboard");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="sm:p-10 px-4 select-none">
      <div>
        <form
          className="flex flex-col items-center justify-center soft-popup"
          onSubmit={handleSubmit}
        >
          <label htmlFor="title" className="text-3xl sm:text-5xl">
            Write a letter
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            className="text-center text-lg sm:text-2xl border-b-1 border-[var(--primary-color)] mt-1 sm:mt-3 focus:outline-none"
            required
          />
          <div className="flex gap-2 text-lg mt-5 sm:mt-10 sm:w-230">
            <p className="sm:text-4xl sm:mr-1">Dear </p>
            <input
              type="date"
              value={deliveryDate}
              onChange={(e) => setDeliveryDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className="border-1 px-2 rounded-md border-[var(--primary-color)] text-[var(--primary-color)] font-semibold"
              required
            />
            <p className="sm:text-4xl sm:ml-1"> me,</p>
          </div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="sm:text-2xl border-5 border-[var(--primary-color)] rounded-md p-2 mt-5 sm:w-230 h-80 w-60 sm:h-120 resize-none text-justify"
            placeholder="Share your thoughts, dreams, hopes, or advice with your future self..."
            required
          />

          {error && (
            <div className="error-message-animate mt-3">
              <p className="text-red-500 text-center bg-red-50 border border-red-200 rounded-md p-3">
                ⚠️ {error}
              </p>
            </div>
          )}

          <button
            className={`flex items-center gap-2 mt-5 sm:w-230 justify-end mb-20 sm:mb-5 cursor-pointer transition-opacity ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:opacity-80"
            }`}
            type="submit"
            disabled={loading}
          >
            <img src="/images/logo.png" className="w-10 sm:w-15" alt="Logo" />
            <p className="sm:text-2xl">
              {loading ? "Saving..." : "Sincerely, Me"}
            </p>
          </button>
        </form>
      </div>
    </div>
  );
}
