export function SubmitButton({label}) {
    return (
        <button className="bg-[var(--primary-color)] text-[var(--cream-color)] py-2 sm:py-3 px-4 sm:px-6 rounded-md text-lg sm:text-xl w-full hover:bg-[var(--light-pink)] transition-colors duration-300">
            {label}
        </button>
    )
}