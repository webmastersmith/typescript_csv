import { MatchResult } from './MatchResult'
import { dateStringToDate } from './utils'
import { MatchData } from './MatchData'

export class MatchReader {
  constructor(public arr: string[][]) {}
  data: MatchData[] = []

  parse(): void {
    this.data = this.arr.map((row: string[]) => {
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
