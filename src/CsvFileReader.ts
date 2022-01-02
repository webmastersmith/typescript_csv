import * as fs from 'fs'

export abstract class CsvFileReader<T> {
  constructor(public fileName: string) {}
  data: T[] = []
  abstract mapRow(row: string[]): T

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, 'utf-8')
      .split(/\r?\n/)
      .map((line: string): string[] => line.split(','))
      .map(this.mapRow)
  }
}
