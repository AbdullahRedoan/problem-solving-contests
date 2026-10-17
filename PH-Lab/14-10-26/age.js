function daysBetweenDates(date1, date2) {
  function daysBetweenDates(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  
  const diffTime = Math.abs(d2 - d1);
  
  return Math.round(diffTime / (1000 * 60 * 60 * 24));
}
}