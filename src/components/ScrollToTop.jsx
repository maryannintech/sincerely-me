export function ScrollToTop() {
  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <button
      onClick={handleScrollToTop}
      className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 bg-[var(--primary-color)] hover:bg-[var(--light-pink)] text-[var(--cream-color)] w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover-lift transition-colors duration-300 z-40"
      aria-label="Scroll to top"
    >
      <i className="bx bx-chevron-up text-2xl"></i>
    </button>
  );
}
