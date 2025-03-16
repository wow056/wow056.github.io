export function getYearMonth(yearMonth: { year: number; month: number }): string {
  return (
    yearMonth.year.toLocaleString(undefined, {
      minimumIntegerDigits: 4,
      useGrouping: false,
    }) +
    '. ' +
    yearMonth.month.toLocaleString(undefined, {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }) +
    '. '
  );
}