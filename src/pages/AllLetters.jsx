import { useState, useEffect } from "react";
import { LetterCard } from "../components/LetterCard";
import { ScrollToTop } from "../components/ScrollToTop";
import { UserAuth } from "../context/AuthContext";
import { supabase } from "../supabaseClient";

export function AllLetters() {
  document.title = "All Letters - Sincerely, Me";
  const { session } = UserAuth();

  const [showSearch, setShowSearch] = useState(false);
  const [error, setError] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchDateWritten, setSearchDateWritten] = useState("");
  const [searchDateOpen, setSearchDateOpen] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const [userLetters, setUserLetters] = useState([]);

  function handleSearch(e) {
    e.preventDefault();
    setIsSearching(true);
    console.log("Search initiated");
    setSearchResults([]);

    const results = userLetters.filter((letter) => {
      const titleMatch = searchTitle
        ? letter.title.toLowerCase().includes(searchTitle.toLowerCase())
        : true;

      const dateWrittenMatch = searchDateWritten
        ? letter.created_at.split("T")[0] === searchDateWritten
        : true;

      const dateOpenMatch = searchDateOpen
        ? letter.delivery_date === searchDateOpen
        : true;

      return titleMatch && dateWrittenMatch && dateOpenMatch;
    });

    setSearchResults(results);
  }

  async function fetchLetters() {
    if (!session?.user?.id) {
      console.log("No user session available");
      return;
    }

    try {
      const { data, error } = await supabase
        .from("letters")
        .select("*")
        .eq("user_id", session.user.id)
        .order("created_at", { ascending: false });

      if (error) {
        throw error;
      }

      setUserLetters(data || []);
    } catch (error) {
      console.error("Error fetching letters:", error);
      setError("Error fetching letters");
    }
  }

  function handleClearSearch() {
    setSearchTitle("");
    setSearchDateWritten("");
    setSearchDateOpen("");
    setIsSearching(false);
    document.querySelector("#search-title").value = "";
    document.querySelector("#date-written").value = "";
    document.querySelector("#date-open").value = "";
  }

  useEffect(() => {
    if (session?.user?.id) {
      fetchLetters();
    }
  }, [session]);

  return (
    <div className="sm:p-10 px-4 select-none relative soft-popup">
      <p className="text-center text-2xl sm:text-4xl ">All your letters</p>
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
          <form
            onSubmit={(e) => handleSearch(e)}
            className="px-5 py-5  sm:mt-5 flex flex-wrap rounded-lg justify-center items-center bg-[var(--primary-color)] w-fit mx-auto gap-3 sm:gap-10"
          >
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
                  onChange={(e) => setSearchTitle(e.target.value)}
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
                  onChange={(e) => setSearchDateWritten(e.target.value)}
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
                  onChange={(e) => setSearchDateOpen(e.target.value)}
                  name="date-open"
                  className="block text-black bg-[var(--cream-color)] p-2 rounded-lg "
                />
              </label>
            </div>
            <button
              onClick={(e) => handleSearch(e)}
              type="submit"
              className="border-1 border-[var(--cream-color)] bg-[var(--primary-color)] text-[var(--cream-color)] py-1 mt-3 px-6 sm:px-8 rounded-md sm:text-xl hover:bg-[var(--light-pink)] transition-colors duration-300 hover:scale-105"
            >
              Search
            </button>
            {isSearching && (
              <button
                onClick={handleClearSearch}
                className="border-1 border-[var(--cream-color)] bg-[var(--primary-color)] text-[var(--cream-color)] py-1 mt-3 px-6 sm:px-8 rounded-md sm:text-xl hover:bg-[var(--light-pink)] transition-all duration-300 transform hover:scale-105 soft-popup"
              >
                Clear
              </button>
            )}
          </form>
        </div>
        {error ? (
          <p className="text-red-500 text-center text-xl">{error}</p>
        ) : (
          <div className="mt-3 sm:mt-5 flex flex-wrap justify-center items-center sm:w-200 mx-auto gap-5 mb-20">
            {isSearching && searchResults.length > 0 ? (
              <>
                {searchResults.map((letter, index) => {
                  const isLocked = new Date(letter.delivery_date) > new Date();

                  return (
                    <LetterCard
                      key={letter.id}
                      label={letter.title}
                      letterLocked={isLocked}
                      className="mb-4"
                    />
                  );
                })}
              </>
            ) : (
              <>
                {isSearching && searchResults.length === 0 ? (
                  <p className="text-center text-xl sm:text-2xl">
                    No letters found
                  </p>
                ) : null}
              </>
            )}
            {userLetters.length > 0 && !isSearching && (
              <>
                {userLetters.length === 0 ? (
                  <div className="text-center w-full">
                    <p className="text-xl text-gray-500 mb-4">
                      No letters yet!
                    </p>
                    <p className="text-lg text-gray-400">
                      Write your first letter to get started
                    </p>
                  </div>
                ) : (
                  userLetters.map((letter, index) => {
                    const isLocked =
                      new Date(letter.delivery_date) > new Date();

                    return (
                      <LetterCard
                        key={letter.id}
                        label={letter.title}
                        letterLocked={isLocked}
                        className="mb-4"
                      />
                    );
                  })
                )}
              </>
            )}
          </div>
        )}
      </div>

      <ScrollToTop />
    </div>
  );
}
