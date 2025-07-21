import { LetterCard } from "../components/LetterCard";

export function Dashboard() {
  const letters = [
    "A Letter to My Future Self",
    "Reflections on Today's Journey",
    "Things I'm Grateful For",
  ];
  document.title = "Dashboard - Sincerely Me";
  return (
    <div className="sm:p-10 px-4 select-none">
      <div className="flex sm:flex-col justify-center items-center sm:items-start sm:gap-10 mb-10 sm:mb-0">
        <div>
          <img
            src="src/assets/images/logo.png"
            className="hidden sm:block w-15 "
          ></img>
        </div>
        <div className="text-[var(--primary-color)] sm:text-4xl text-3xl flex sm:flex-col justify-center gap-10 sm:gap-3 fixed bottom-0 sm:top-0 py-3 bg-[var(--cream-color)] sm:bg-transparent border-t-2 sm:border-0 border-[var(--primary-color)] w-full sm:w-auto">
          <i className="bx  bxs-home-heart cursor-pointer"></i>
          <i className="bx  bxs-plus-square cursor-pointer"></i>
          <i className="bx  bxs-grid-search cursor-pointer"></i>
          <i className="bx  bxs-info-circle cursor-pointer"></i>
        </div>
      </div>

      <div className=" flex justify-evenly gap-10">
        <div className="left flex flex-col justify-center gap-5 items-center ">
          <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-10">
            <div className="text-center">
              <p className="text-3xl sm:text-5xl">Welcome back!</p>
              <p className="sm:text-xl italic">
                Every moment is a letter to <br />
                your future self.
              </p>
            </div>
            <div className="bg-[var(--primary-color)] rounded-md pb-1 cursor-pointer">
              <img
                src="src/assets/images/envelope.png"
                className="w-35 sm:w-55"
              ></img>
              <p className="text-center text-[var(--cream-color)]">
                Write a new letter
              </p>
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
                <button className="cursor-pointer bg-[var(--primary-color)] text-[var(--cream-color)] py-1 px-4 rounded-md mb-5 sm:mb-10 sm:text-lg">
                  See more
                </button>
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
                <button className="cursor-pointer bg-[var(--primary-color)] text-[var(--cream-color)] py-1 px-4 rounded-md mb-20 sm:mb-10 sm:text-lg">
                  See more
                </button>
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
              <p className="mt-5 font-bold text-[var(--primary-color)] text-lg cursor-pointer italic ">
                See more
              </p>
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
            <div className="w-full flex justify-end">
              <p className="font-bold text-[var(--primary-color)] mt-5 text-lg cursor-pointer italic ">
                See more
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
