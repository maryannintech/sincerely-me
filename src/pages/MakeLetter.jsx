

export function MakeLetter() {
  document.title = "Write a letter - Sincerely, Me";
  return (
    <div className="sm:p-10 px-4 select-none">
      <div>
        <form className="flex flex-col items-center justify-center soft-popup">
          <label htmlFor="title" className="text-3xl sm:text-5xl">
            Write a letter
          </label>
          <input
            id="title"
            type="text"
            placeholder="Enter title"
            className="text-center text-lg sm:text-2xl border-b-1 border-[var(--primary-color)] mt-1 sm:mt-3 focus:outline-none"
            required
          ></input>
          <div className="flex gap-2 text-lg mt-5 sm:mt-10 sm:w-230">
            <p className="sm:text-4xl sm:mr-1">Dear </p>
            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              className="border-1 px-2 rounded-md border-[var(--primary-color)] text-[var(--primary-color)] font-semibold"
              required
            ></input>
            <p className="sm:text-4xl sm:ml-1"> me,</p>
          </div>
          <textarea
            className="sm:text-2xl border-5 border-[var(--primary-color)] rounded-md p-2 mt-5 sm:w-230 h-80 w-60 sm:h-120 resize-none text-justify"
            placeholder="Share your thoughts, dreams, hopes, or advice with your future self..."
            required
          ></textarea>
          <button
            className="flex items-center gap-2 mt-5 sm:w-230 justify-end mb-20 sm:mb-5 cursor-pointer hover:opacity-80 transition-opacity"
            type="submit"
          >
            <img
              src="/images/logo.png"
              className="w-10 sm:w-15"
            ></img>
            <p className="sm:text-2xl">Sincerely, Me</p>
          </button>
        </form>
      </div>
    </div>
  );
}
