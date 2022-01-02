import { MatchData } from './MatchData'
import { MatchResult } from './MatchResult'

export class WinsAnalysis {
  constructor(public data: MatchData[], public team: string) {}

  winArr = this.data.filter(
    (row: MatchData): boolean =>
      (row[1] === this.team && row[5] === MatchResult.HomeWin) ||
      (row[2] === this.team && row[5] === MatchResult.AwayWin)
  )

  wins: number = this.winArr.length
}
