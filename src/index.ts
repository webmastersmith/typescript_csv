import { MatchResult } from './MatchResult'
import { MatchReader, MatchData } from './MatchReader'

const reader = new MatchReader('./football.csv')
reader.read()

const winArr = reader.data.filter(
  (row: MatchData): boolean =>
    (row[1] === 'Man United' && row[5] === MatchResult.HomeWin) ||
    (row[2] === 'Man United' && row[5] === MatchResult.AwayWin)
)

const wins: number = winArr.length
console.log(winArr)

console.log(`Man United won ${wins} games.`)
