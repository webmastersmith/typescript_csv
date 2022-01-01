import * as fs from 'fs'

const data: string[][] = fs
  .readFileSync('./football.csv', 'utf-8')
  .split(/\r?\n/)
  .map((line: string): string[] => line.split(','))

const wins: number = data.filter(
  (a: string[]): boolean =>
    (a[1] === 'Man United' && a[5] === 'H') ||
    (a[2] === 'Man United' && a[5] === 'A')
).length

console.log(`Man United won ${wins} games.`)
