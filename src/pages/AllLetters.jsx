import { useState, useEffect } from "react";
import { LetterCard } from "../components/LetterCard";
import { ScrollToTop } from "../components/ScrollToTop";
import { UserAuth } from "../context/AuthContext";
import { supabase } from "../supabaseClient";
import { ErrorText } from "../components/ErrorText";

export function AllLetters() {
  document.title = "All Letters - Sincerely, Me";
  const { session } = UserAuth();

  const [showSearch, setShowSearch] = useState(false);
  const [error, setError] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [userLetters, setUserLetters] = useState([]);

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
          <div className="flex justify-end sm:my-4">
            <button
              type="submit"
              className="bg-[var(--primary-color)] text-[var(--cream-color)] py-1 mt-3 px-6 sm:px-8 rounded-md sm:text-xl hover:bg-[var(--light-pink)] transition-colors duration-300 "
            >
              Search
            </button>
          </div>
        </div>
        {error ? (
          <p className="text-red-500 text-center text-xl">{error}</p>
        ) : (
          <div className="mt-3 sm:mt-5 flex flex-wrap justify-center items-center sm:w-200 mx-auto gap-5 mb-20">
            {userLetters.length === 0 ? (
              <div className="text-center w-full">
                <p className="text-xl text-gray-500 mb-4">No letters yet!</p>
                <p className="text-lg text-gray-400">
                  Write your first letter to get started
                </p>
              </div>
            ) : (
              userLetters.map((letter, index) => {
                const isLocked = new Date(letter.delivery_date) > new Date();

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
          </div>
        )}
      </div>

      <ScrollToTop />
    </div>
  );
}
