export function SignIn() {
  document.title = "Sign In - Sincerely, Me";
  return (
    <div className="flex flex-wrap">
      <div>
        <div className="sm:w-200 h-screen flex flex-col justify-center">
          <div className="bg-[var(--primary-color)] h-screen sm:h-165 sm:ml-5 flex flex-col justify-center items-center sm:rounded-lg">
            <img
              src="src\assets\images\envelope.png"
              className="w-50 sm:w-sm"
            ></img>
            <p className="text-center sm:text-2xl text-[var(--cream-color)]">
              made by{" "}
              <a href="https://github.com/maryannintech" target="_blank">
                maryannintech
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
