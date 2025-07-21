import { Footer } from "../components/Footer";

export function Loading() {
  document.title = "Sincerely Me";
  return (
    <div className="flex flex-col justify-center items-center m-auto h-screen">
      <div className="flex justify-center items-center">
        <img src="src/assets/images/logo.png" className="w-20 sm:w-40"></img>
        <p className="ml-3 sm:ml-5 text-2xl sm:text-5xl">Sincerely, Me</p>
      </div>
      <p className="mt-10 sm:mt-20 italic font-bold animate-pulse sm:text-xl text-right text-[var(--primary-color)]">Preparing your letters...</p>
      <Footer />
    </div>
  );
}
