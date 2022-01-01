import { CsvFileReader } from './CsvFileReader'

const reader = new CsvFileReader('./football.csv')
reader.read()

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

const winArr = reader.data.filter(
  (a: string[]): boolean =>
    (a[1] === 'Man United' && a[5] === MatchResult.HomeWin) ||
    (a[2] === 'Man United' && a[5] === MatchResult.AwayWin)
)

const wins: number = winArr.length
console.log(winArr)

console.log(`Man United won ${wins} games.`)
