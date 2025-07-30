import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";

export function LetterCard({ label, letterLocked = false }) {
  const truncatedLabel = label.split(" ").slice(0, 2).join(" ");
  const navigate = useNavigate();
  const { session } = UserAuth();
  const [error, setError] = useState("");

  async function handleLetterClick() {
    try {
      const { data, error } = await supabase
        .from("letters")
        .select("*")
        .eq("title", label)
        .eq("user_id", session?.user?.id)
        .single();

      if (error) {
        setError(error.message);
      } else {
        navigate(`/app/letter`, {
          state: {
            title: data.title,
            content: data.content,
            deliveryDate: data.delivery_date,
            createdAt: data.created_at,
          },
        });
      }

      setLetterContent(data.content);
    } catch (error) {
      setError("Error fetching letter content");
      return;
    }
  }

  return (
    <div
      className="bg-[var(--primary-color)] rounded-md pb-1 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
      onClick={!letterLocked ? handleLetterClick : null}
      style={{
        backgroundColor: letterLocked
          ? "var(--light-pink)"
          : "var(--primary-color)",
        opacity: letterLocked ? 0.5 : 1,
        cursor: letterLocked ? "not-allowed" : "pointer",
      }}
    >
      <img src="/images/envelope.png" className="w-35 sm:w-60"></img>
      <p className="text-center text-[var(--cream-color)]">
        {truncatedLabel}..
      </p>
    </div>
  );
}
