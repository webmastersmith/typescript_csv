export function dateStringToDate(dateString: string): Date {
  const d = dateString.split('/') //('28/10/2018') [day, month, year]
  enum CustomDate {
    Year = +d[2],
    Day = +d[0],
    Month = +d[1] - 1,
  }
  return new Date(CustomDate.Year, CustomDate.Month, CustomDate.Day) //year, month, day
}
