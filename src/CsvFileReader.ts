import * as fs from 'fs'

export class CsvFileReader {
  constructor(public fileName: string) {}
  data: string[][] = []

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, 'utf-8')
      .split(/\r?\n/)
      .map((line: string): string[] => line.split(','))
  }
}
