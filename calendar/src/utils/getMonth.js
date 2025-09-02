import moment from "moment";
export const getMonthcol = (year, month) => {
  let days = [];

  let firstDayOfMonth = new Date(year, month, 1);
  const weekday = firstDayOfMonth.getDay();
  let gridStart = new Date(year, month, 1 - weekday);

  for (let i = 0; i < 42; i++) {
    // ✅ clone gridStart and add i days
    let dayDate = new Date(gridStart);
    dayDate.setDate(gridStart.getDate() + i);

    // ✅ format key
    let format = moment(dayDate).format("DD/MM/YYYY");

    // ✅ check if in current month
    let inCurrentMonth = dayDate.getMonth() === month;

    days.push({
      dateObj: dayDate,
      key: format,
      inCurrentMonth: inCurrentMonth,
    });
  }

  return days;
};
