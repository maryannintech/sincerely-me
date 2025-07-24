import { Footer } from "../components/Footer";

export function About() {
  document.title = "About - Sincerely, Me";
  return (
    <>
      <div className="soft-popup select-none">
        <div className="flex justify-center items-center ">
          <img src="/images/logo.png" className="w-20 sm:w-30"></img>
          <p className="ml-3 sm:ml-5 text-2xl sm:text-4xl">Sincerely, Me</p>
        </div>
        <p className="text-center text-lg px-5 sm:w-1/2 sm:mx-auto mt-5 sm:text-2xl ">
          Sincerely, Me is a digital letter-writing platform that allows you to
          send letters to your future self. Write about your current thoughts,
          dreams, and experiences, then schedule them to be delivered at a later
          date.
        </p>
        <div className="w-fit mx-auto mt-3 sm:mt-5">
          <p className="text-lg sm:text-2xl text-center text-[var(--primary-color)] font-semibold">
            How it works
          </p>
          <ol className="list-decimal ml-10 text-lg sm:text-2xl">
            <li>Write your letter with thoughts, feelings, or goals</li>
            <li>Choose a future date for delivery</li>
            <li>Receive your letter when the time comes</li>
          </ol>
        </div>
        <div className="w-fit mx-auto mt-4 sm:mt-10 mb-20 sm:mb-0">
          <p className="text-lg sm:text-2xl text-center text-[var(--primary-color)] font-semibold">
            Your Privacy & Security
          </p>
          <p className="text-center text-base sm:text-lg px-5 sm:w-3/4 sm:mx-auto mt-2">
            Your letters are securely stored using Supabase, ensuring your
            personal thoughts and messages remain private and protected. We
            never share your data with third parties.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
