import { MatchData } from '../MatchData'
import { MatchResult } from '../MatchResult'
import { Analyzer } from '../Summary'

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(data: MatchData[]) {
    const wins = data.filter(
      (row: MatchData): boolean =>
        (row[1] === this.team && row[5] === MatchResult.HomeWin) ||
        (row[2] === this.team && row[5] === MatchResult.AwayWin)
    )
    return `Team: ${this.team} won ${wins.length} games.`
  }
}
