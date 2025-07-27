import dayjs from "dayjs";

export const generateDate = (
  month = dayjs().month(),
  year = dayjs().year()
) => {
  const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
  const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");
  const arrayDate = [];

  // create prefix date
  for (let i = 0; i < firstDateOfMonth.day(); i++) {
    arrayDate.push({ currentMonth: false, date: firstDateOfMonth.day(i) });
  }

  // generate current dates for the month
  for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
    arrayDate.push({
      currentMonth: true,
      date: dayjs(firstDateOfMonth).date(i),
      today:
        firstDateOfMonth.date(i).toDate().toDateString() ===
        dayjs().toDate().toDateString(),
    });
  }

  const remainingDays = 42 - arrayDate.length;

  // create suffix date
  for (
    let i = lastDateOfMonth.date() + 1;
    i <= lastDateOfMonth.date() + remainingDays;
    i++
  ) {
    arrayDate.push({
      currentMonth: false,
      date: dayjs(lastDateOfMonth).date(i),
    });
  }

  return { arrayDate };
};
