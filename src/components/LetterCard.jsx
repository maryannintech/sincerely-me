export function LetterCard({ label, letterLocked = false }) {
  const truncatedLabel = label.split(" ").slice(0, 2).join(" ");

  return (
    <div
      className="bg-[var(--primary-color)] rounded-md pb-1 cursor-pointer"
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
