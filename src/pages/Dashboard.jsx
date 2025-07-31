import { LetterCard } from "../components/LetterCard";
import { Link } from "react-router-dom";
import { SeeMoreButton } from "../components/SeeMoreButton";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../components/ScrollToTop";
import { UserAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { generateDate } from "../util/calendar";
import { supabase } from "../supabaseClient";
import dayjs from "dayjs";

export function Dashboard() {
  let navigate = useNavigate();

  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  const [userLetters, setUserLetters] = useState([]);

  const { session, signOut } = UserAuth();

  async function fetchLetters() {
    try {
      const { data, error } = await supabase
        .from("letters")
        .select("*")
        .eq("user_id", session?.user?.id)
        .order("created_at", { ascending: true});

      if (error) {
        console.error("Error fetching letters:", error);
        return;
      }

      setUserLetters(data || []);
    } catch (error) {
      console.error("Error fetching letters:", error);
    }
  }

  const todayLetters = userLetters.filter((letter) => {
    const deliveryDate = dayjs(letter.delivery_date);
    return (
      deliveryDate.isSame(dayjs(), "day") || deliveryDate.isBefore(dayjs())
    );
  });

  const futureLetters = userLetters.filter((letter) => {
    const deliveryDate = dayjs(letter.delivery_date);
    return deliveryDate.isAfter(dayjs());
  });

  const selectedDateLetters = userLetters.filter((letter) => {
    const deliveryDate = dayjs(letter.delivery_date);
    return deliveryDate.isSame(selectDate, "day");
  });

  useEffect(() => {
    if (session?.user?.id) {
      fetchLetters();
    }
  }, [session]);
  document.title = "Dashboard - Sincerely, Me";
  return (
    <div className=" px-4 select-none sm:pb-0 pb-20">
      <div className=" flex justify-evenly gap-10 soft-popup">
        <div className="left flex flex-col justify-center gap-5 items-center ">
          <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-10">
            <div className="text-center">
              <p className="text-3xl sm:text-5xl">Welcome!</p>
              <p className="sm:text-xl italic">
                Every moment is a letter to <br />
                your future self.
              </p>
            </div>
            <div className="bg-[var(--primary-color)] rounded-md pb-1 hover-lift hover-glow transition-all duration-300">
              <button
                className="cursor-pointer hover:opacity-90 transition-opacity duration-300"
                onClick={() => navigate("/app/write")}
              >
                <img src="/images/envelope.png" className="w-35 sm:w-55"></img>
                <p className="text-center text-[var(--cream-color)]">
                  Write a new letter
                </p>
              </button>
            </div>
          </div>
          <div>
            <div className="sm:ml-20 flex flex-col items-center sm:items-baseline justify-baseline gap-5">
              <p className="sm:text-2xl text-xl text-left">
                Letters for Today! ({todayLetters.length})
              </p>
              <div className="flex flex-wrap gap-8 items-center justify-center sm:justify-start w-fit">
                {todayLetters.length === 0 ? (
                  <p className="text-gray-500 italic">
                    No letters to read today
                  </p>
                ) : (
                  todayLetters.slice(0, 3).map((letter, index) => {
                    return <LetterCard key={letter.id} label={letter.title} />;
                  })
                )}
              </div>
              <div className="flex justify-center sm:justify-end sm:items-center w-full">
                <SeeMoreButton />
              </div>
            </div>
            <div className="sm:ml-20 flex flex-col items-center sm:items-baseline justify-baseline gap-5">
              <p className="sm:text-2xl text-xl text-left">
                Future's Mailbag ({futureLetters.length})
              </p>
              <div className="flex flex-wrap gap-8 items-center justify-center sm:justify-start w-fit">
                {futureLetters.length === 0 ? (
                  <p className="text-gray-500 italic">
                    No future letters scheduled
                  </p>
                ) : (
                  futureLetters.slice(0, 3).map((letter, index) => {
                    return (
                      <LetterCard
                        key={letter.id}
                        label={letter.title}
                        letterLocked={true}
                      />
                    );
                  })
                )}
              </div>
              <div className="flex justify-center sm:justify-end sm:items-center w-full">
                <SeeMoreButton />
              </div>
            </div>
          </div>
        </div>
        <div className="right hidden sm:flex items-start flex-col w-90 px-6 sm:mb-10">
          <div className="w-full">
            <div className="bg-[var(--primary-color)] text-[var(--cream-color)] rounded-md py-5 px-3 shadow-lg w-full h-86">
              <div className="text-center flex justify-evenly items-center transition-all duration-200">
                <p>
                  {today.format("MMMM")}, {today.format("YYYY")}
                </p>
                <div className="flex items-center gap-2 justify-center">
                  <button onClick={() => setToday(today.subtract(1, "month"))}>
                    <i className="bx  bx-caret-left cursor-pointer hover:scale-110"></i>{" "}
                  </button>
                  <button
                    className="cursor-pointer hover:underline"
                    onClick={() => setToday(currentDate)}
                  >
                    Today
                  </button>
                  <button onClick={() => setToday(today.add(1, "month"))}>
                    <i className="bx  bx-caret-right cursor-pointer hover:scale-110"></i>{" "}
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-2 mt-3 place-content-center text-center">
                {days.map((day, index) => {
                  return (
                    <div key={index}>
                      <h1 className="text-center font-bold">{day}</h1>
                    </div>
                  );
                })}
                {generateDate(today.month(), today.year()).arrayDate.map(
                  ({ date, currentMonth, today }, index) => {
                    return (
                      <div key={index}>
                        <p
                          className={`text-center cursor-pointer transition-all duration-200 py-1 px-2 ${
                            currentMonth
                              ? "font-bold hover:bg-[var(--cream-color)] hover:text-[var(--primary-color)] hover:rounded-md"
                              : "text-pink-200 text-lg hover:text-[var(--cream-color)] "
                          } ${
                            today
                              ? "bg-[var(--cream-color)] text-[var(--primary-color)] rounded-md shadow-md"
                              : ""
                          } ${
                            selectDate.toDate().toDateString() ===
                            date.toDate().toDateString()
                              ? "border-2 border-[var(--cream-color)] rounded-md"
                              : ""
                          }  hover:scale-110`}
                          onClick={() => setSelectDate(date)}
                        >
                          {date.date()}
                        </p>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
          <div className="w-full">
            <p className="text-center italic text-xl mt-10 mb-2">
              Your letters, by date.
              <br />
              <span className="font-bold text-[var(--primary-color)]">
                {selectDate.format("MMMM D, YYYY")}
              </span>
            </p>
            <div className="border-1 border-[#CC7676] w-full"></div>
            <ul>
              {selectedDateLetters.length === 0 ? (
                <li className="my-2 text-lg italic text-gray-500">
                  No letters for this date
                </li>
              ) : (
                selectedDateLetters.slice(0, 2).map((letter, index) => {
                  const isLocked = dayjs(letter.delivery_date).isAfter(dayjs());
                  return (
                    <li
                      key={letter.id}
                      className="my-2 text-lg flex items-center gap-2"
                    >
                      {isLocked ? (
                        <i className="bx bxs-lock text-sm text-[var(--light-pink)]"></i>
                      ) : (
                        <i className="bx bxs-lock-open text-sm text-[var(--primary-color)]"></i>
                      )}
                      {letter.title}
                    </li>
                  );
                })
              )}
            </ul>
            <div className="w-full flex justify-end mb-10">
              <Link to={"/app/all-letters"}>
                <p className="mt-5 font-bold text-[var(--primary-color)] text-lg cursor-pointer italic hover:underline">
                  See more
                </p>
              </Link>
            </div>

            <p className="text-center italic text-xl mt-6 mb-2">
              Your Journey So Far
            </p>
            <div className="border-1 border-[#CC7676] w-full"></div>
            <ul>
              <li className="my-2 text-lg">
                Total Letters Written: {userLetters.length}
              </li>
              <li className="my-2 text-lg">
                Letters Unlocked: {todayLetters.length}
              </li>
              <li className="my-2 text-lg">
                Letters Pending: {futureLetters.length}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}
