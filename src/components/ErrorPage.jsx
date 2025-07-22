export function ErrorPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl sm:text-6xl text-center mt-10 text-[var(--primary-color)] font-extrabold">
        404 - Page Not Found
      </h1>
      <p className="text-xl sm:text-2xl text-center mt-5">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <div className="flex justify-center items-center gap-2 sm:mt-5">
        <img src="src\assets\images\logo.png" className="w-10"></img>
        <p className="sm:text-xl">Sincerely, Me</p>
      </div>
    </div>
  );
}
