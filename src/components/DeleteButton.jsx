export function DeleteButton({letter, onDelete}){
    return (
        <button onClick={onDelete} className="bg-pink-800 px-2 rounded-lg mt-2 text-[var(--cream-color)] hover-button soft-popup cursor-pointer">
            Delete
        </button>
    )
}