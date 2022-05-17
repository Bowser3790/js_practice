function dayName(date) {
  const daysofTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
                        "Thursday", "Friday", "Saturday", "Sunday"];
  return daysofTheWeek[date.getDay()];
}
