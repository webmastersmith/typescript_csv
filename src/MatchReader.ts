import { CsvFileReader } from './CsvFileReader'
import { MatchResult } from './MatchResult'
import { dateStringToDate } from './utils'

export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
]

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      +row[3],
      +row[4],
      row[5] as MatchResult,
      row[6],
    ]
  }
}
