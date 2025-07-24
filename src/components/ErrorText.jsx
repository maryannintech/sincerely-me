export function ErrorText({ message }) {
    return (
        <div className="error-message-animate">
            <p className="text-red-500 sm:text-xl text-center mt-3 bg-red-50 border border-red-200 rounded-md p-3 animate-pulse">
                ⚠️ {message}
            </p>
        </div>
    )
}
