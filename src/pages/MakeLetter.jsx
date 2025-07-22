import { Navbar } from "../components/Navbar";

export function MakeLetter() {
  return (
    <div className="sm:p-10 px-4 select-none">
      <Navbar />
      <div>
        <form className="flex flex-col items-center justify-center">
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
          <div className="flex gap-2 text-lg mt-5 sm:mt-10">
            <p className="sm:text-4xl sm:mr-1">Dear </p>
            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              className="border-1 px-2 rounded-md border-[var(--primary-color)] text-[var(--primary-color)] font-semibold"
            ></input>
            <p className="sm:text-4xl sm:ml-1"> me,</p>
          </div>
        </form>
      </div>
    </div>
  );
}
