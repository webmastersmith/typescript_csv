import { CsvFileReader } from './CsvFileReader'
import { MatchResult } from './MatchResult'

const reader = new CsvFileReader('./football.csv')
reader.read()

const winArr = reader.data.filter(
  (a: string[]): boolean =>
    (a[1] === 'Man United' && a[5] === MatchResult.HomeWin) ||
    (a[2] === 'Man United' && a[5] === MatchResult.AwayWin)
)

const wins: number = winArr.length
console.log(winArr)

console.log(`Man United won ${wins} games.`)
