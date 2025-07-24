import { useState } from "react";

export function Input({
  label,
  type,
  id,
  name,
  required,
  placeholder,
  isPassword,
  handleInputChange,
}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="mt-3 sm:mt-5">
      <label htmlFor={id} className=" sm:text-2xl">
        {label}
        <div className="flex items-center gap-2 justify-center">
          <input
            type={isPassword && !showPassword ? "password" : "text"}
            id={id}
            onChange={(e) => {
              handleInputChange(e);
            }}
            name={name}
            required={required}
            placeholder={placeholder}
            className="bg-[#EBBABA] block pl-2 rounded-md w-full py-1 sm:py-2 active:outline-none focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
          ></input>
          {isPassword && (
            <button
              type="button"
              onClick={isPassword ? () => setShowPassword(!showPassword) : null}
              className="text-[var(--primary-color)] text-2xl sm:text-3xl"
            >
              <i
                className={`bx ${showPassword ? "bxs-lock-open" : "bxs-lock"}`}
              ></i>
            </button>
          )}
        </div>
      </label>
    </div>
  );
}
