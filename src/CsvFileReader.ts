import * as fs from 'fs'

export class CsvFileReader {
  constructor(public fileName: string) {}
  data: string[][] = []

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, 'utf-8')
      .split(/\r?\n/)
      .map((line: string): string[] => line.split(','))
      .map((arr: any) => {
        const d = arr[0].split('/') //day, month, year
        arr[0] = new Date(d[2], d[1] - 1, d[0]) //year, month, day
        arr[3] = parseInt(arr[3])
        arr[4] = parseInt(arr[4])
        return arr
      })
  }
}
