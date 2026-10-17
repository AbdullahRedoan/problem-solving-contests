function getDayOfWeek(year, day, month) { 
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const date = new Date(year, month-1, day);
  const dayName = daysOfWeek[date.getDay()]
  console.log(date.toDateString());
    return dayName
}

console.log(getDayOfWeek(2024, 11, 5));