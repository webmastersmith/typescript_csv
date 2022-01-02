import { MatchResult } from './MatchResult'
import { dateStringToDate } from './utils'
import { MatchData } from './MatchData'
import { CsvFileReader } from './CsvFileReader'

interface DataReader {
  data: string[][]
  read(): void
}

export class MatchReader {
  static fromCsv(fileName: string): MatchReader {
    return new MatchReader(new CsvFileReader(fileName))
  }

  constructor(public csv: DataReader) {}
  matches: MatchData[] = []

  parse(): void {
    this.csv.read()
    this.matches = this.csv.data.map((row: string[]) => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        +row[3],
        +row[4],
        row[5] as MatchResult,
        row[6],
      ]
    })
  }
}
