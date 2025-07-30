import { useLocation } from "react-router-dom";
import dayjs from "dayjs";

export function Letter() {
  const location = useLocation();
  const { title, content, deliveryDate, createdAt } = location.state || {};
  document.title = `${title} - Sincerely, Me`;

  return (
    <div className="text-center sm:-rotate-2 sm:hover:rotate-0 transition-all duration-300 select-none sm:w-180 m-auto sm:p-5 sm:text-xl sm:mb-10 px-5 sm:border-5 sm:border-[var(--primary-color)] sm:rounded-lg soft-popup sm:shadow-xl">
      <p className="text-right text-[var(--primary-color)] font-semibold sm:text-2xl text-xl pb-4">{dayjs(createdAt).format("MMMM D, YYYY")}</p>
      <p className="text-left sm:text-2xl text-xl">
        Dear{" "}
        <span className="text-[var(--primary-color)] font-semibold">
          {dayjs(deliveryDate).format("MMMM D, YYYY")}
        </span>{" "}
        me,
      </p>
      <p className="text-center py-4 sm:text-3xl text-xl">{title}</p>
      <p className="text-justify">{content}</p>
      <div className="flex justify-end items-center gap-2 mt-5 sm:mt-5 mb-20 sm:mb-0">
        <img src="/images/logo.png" className="w-15"></img>
        <p className="sm:text-2xl text-xl">Sincerely, Me</p>
      </div>
    </div>
  );
}
