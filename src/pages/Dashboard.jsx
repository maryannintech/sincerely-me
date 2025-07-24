import { LetterCard } from "../components/LetterCard";
import { Link } from "react-router-dom";
import { SeeMoreButton } from "../components/SeeMoreButton";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../components/ScrollToTop";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";

export function Dashboard() {
  let navigate = useNavigate();

  const letters = [
    "A Letter to My Future Self",
    "Reflections on Today's Journey",
    "Things I'm Grateful For",
  ];

  const { session, signOut } = UserAuth();
  document.title = "Dashboard - Sincerely, Me";
  return (
    <div className="sm:p-10 px-4 select-none sm:pb-0 pb-20">
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
                Letters for Today!
              </p>
              <div className="flex flex-wrap gap-8 items-center justify-center sm:justify-start w-fit">
                {letters.map((letter, index) => {
                  return <LetterCard key={index} label={letter} />;
                })}
              </div>
              <div className="flex justify-center sm:justify-end sm:items-center w-full">
                <SeeMoreButton />
              </div>
            </div>
            <div className="sm:ml-20 flex flex-col items-center sm:items-baseline justify-baseline gap-5">
              <p className="sm:text-2xl text-xl text-left">Future's Mailbag</p>
              <div className="flex flex-wrap gap-8 items-center justify-center sm:justify-start w-fit">
                {letters.map((letter, index) => {
                  return (
                    <LetterCard
                      key={index}
                      label={letter}
                      letterLocked={true}
                    />
                  );
                })}
              </div>
              <div className="flex justify-center sm:justify-end sm:items-center w-full">
                <SeeMoreButton />
              </div>
            </div>
          </div>
        </div>
        <div className="right hidden sm:flex items-start flex-col w-90 px-6">
          <div className="w-full">
            <div className="bg-[var(--primary-color)] text-[var(--cream-color)] rounded-md p-20 shadow-lg w-full h-75"></div>
          </div>
          <div className="w-full">
            <p className="text-center italic text-xl mt-10 mb-2">
              Your future messages, by date.
            </p>
            <div className="border-1 border-[#CC7676] w-full"></div>
            <ul>
              {letters.map((letter, index) => {
                return (
                  <li key={index} className="my-2 text-lg">
                    • {letter}
                  </li>
                );
              })}
            </ul>
            <div className="w-full flex justify-end mb-10">
              <Link to={"/app/all-letters"}>
                <p className="mt-5 font-bold text-[var(--primary-color)] text-lg cursor-pointer italic ">
                  See more
                </p>
              </Link>
            </div>

            <p className="text-center italic text-xl mt-6 mb-2">
              Your Journey So Far
            </p>
            <div className="border-1 border-[#CC7676] w-full"></div>
            <ul>
              <li className="my-2 text-lg">• Total Letters Written: 15</li>
              <li className="my-2 text-lg">• Letters Unlocked: 4</li>
              <li className="my-2 text-lg">• Next Unlock In: 50 days</li>
            </ul>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}
