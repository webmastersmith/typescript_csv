import { MatchResult } from './MatchResult'
import { MatchReader, MatchData } from './MatchReader'

const reader = new MatchReader('./football.csv')
reader.read()

const winArr = reader.data.filter(
  (a: MatchData): boolean =>
    (a[1] === 'Man United' && a[5] === MatchResult.HomeWin) ||
    (a[2] === 'Man United' && a[5] === MatchResult.AwayWin)
)

const wins: number = winArr.length
console.log(winArr)

console.log(`Man United won ${wins} games.`)
