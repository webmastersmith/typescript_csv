import * as fs from 'fs'
import { dateStringToDate } from './utils'
import { MatchResult } from './MatchResult'

type MatchData = [Date, string, string, number, number, MatchResult, string]
export class CsvFileReader {
  constructor(public fileName: string) {}
  data: MatchData[] = []

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, 'utf-8')
      .split(/\r?\n/)
      .map((line: string): string[] => line.split(','))
      .map(this.mapRow)
  }

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
