import { useState } from "react";

export function AllLetters() {
  document.title = "All Letters - Sincerely, Me";
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="sm:p-10 px-4 select-none">
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
        </div>
      </div>
    </div>
  );
}
