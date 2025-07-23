import { useState } from "react";
import { LetterCard } from "../components/LetterCard";

export function AllLetters() {
  document.title = "All Letters - Sincerely, Me";
  const [showSearch, setShowSearch] = useState(false);

  const letters = [
    "A Letter to My Future Self",
    "Reflections on Today's Journey",
    "Things I'm Grateful For",
    "My Dreams and Aspirations",
    "Lessons I've Learned This Year",
    "To the Person I Want to Become",
    "Memories Worth Keeping",
    "Goals for Next Month",
    "What Makes Me Happy",
    "A Note from My Heart",
    "Dear 30-Year-Old Me",
    "Thoughts on Love and Life",
    "My Current Struggles",
    "Things I Want to Remember",
    "Advice for Tough Times",
    "Celebrating Small Victories",
    "My Journey So Far",
    "Dreams I'm Chasing",
    "Letters from My Twenties",
    "Hope for Tomorrow",
    "Gratitude in Dark Times",
    "My Creative Awakening",
    "Building Better Habits",
    "Learning to Love Myself",
    "Adventures I Want to Take",
  ];

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="sm:p-10 px-4 select-none relative">
      <p className="text-center text-2xl sm:text-4xl soft-popup">
        All your letters
      </p>
      <div>
        <div className=" sm:hidden text-3xl text-center  w-fit m-auto px-3 text-[var(--primary-color)]">
          <button onClick={() => setShowSearch(!showSearch)}>
            <i className="bx  bx-menu-search"></i>
          </button>
        </div>
        <div
          className={`w-fit mx-auto sm:flex flex-col ${
            showSearch ? "block" : "hidden"
          } soft-popup`}
        >
          <form className="px-5 py-5  sm:mt-5 flex flex-wrap rounded-lg justify-center items-center bg-[var(--primary-color)] w-fit mx-auto gap-3 sm:gap-10">
            <div>
              <label
                htmlFor="search-title"
                className="text-[var(--cream-color)] text-lg sm:text-xl"
              >
                Search for title
                <input
                  required
                  type="text"
                  id="search-title"
                  name="search-title"
                  placeholder="Search for title"
                  className="block text-black bg-[var(--cream-color)] p-2 rounded-lg sm:w-80"
                />
              </label>
            </div>
            <div>
              <label
                htmlFor="date-written"
                className="text-[var(--cream-color)] text-lg sm:text-xl"
              >
                Date you wrote
                <input
                  type="date"
                  name="date-written"
                  id="date-written"
                  className="block text-black bg-[var(--cream-color)] p-2 rounded-lg "
                />
              </label>
            </div>
            <div>
              <label
                htmlFor="date-open"
                className="text-[var(--cream-color)] text-lg sm:text-xl"
              >
                Date to be opened
                <input
                  type="date"
                  id="date-open"
                  name="date-open"
                  className="block text-black bg-[var(--cream-color)] p-2 rounded-lg "
                />
              </label>
            </div>
          </form>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[var(--primary-color)] text-[var(--cream-color)] py-1 mt-3 px-6 sm:px-8 rounded-md sm:text-xl hover:bg-[var(--light-pink)] transition-colors duration-300 "
            >
              Search
            </button>
          </div>
          <div>
            <p className="hidden text-lg sm:text-3xl sm:block text-center sm:text-left">
              A-Z
            </p>
          </div>
        </div>

        <p className="pl-3 sm:hidden text-lg sm:text-2xl flex">A-Z</p>
        <div className="mt-3 sm:mt-5 flex flex-wrap justify-center items-center sm:w-200 mx-auto gap-5 mb-20">
          {letters.map((letter, index) => {
            return (
              <LetterCard
                key={index}
                label={letter}
                className="mb-4"
              />
            );
          })}
        </div>
      </div>

      <button
        onClick={handleScrollToTop}
        className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 bg-[var(--primary-color)] hover:bg-[var(--light-pink)] text-[var(--cream-color)] w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover-lift transition-colors duration-300 z-40"
        aria-label="Scroll to top"
      >
        <i className="bx bx-chevron-up text-2xl"></i>
      </button>
    </div>
  );
}
