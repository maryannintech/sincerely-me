import { generateDate } from "../util/calendar";
export function Calendar() {
  return (
    <>
      {generateDate().map(({date, currentMonth, today}, index) => {
        return <div>
            <h1>{date.format("DD")}</h1>
        </div>
      })}
    </>
  );
}
