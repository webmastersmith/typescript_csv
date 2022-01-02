import { MatchReader } from './MatchReader'
import { Summary } from './Summary'
import { CsvFileReader } from './CsvFileReader'
import { ConsoleReports } from './reportTargets/ConsoleReports'
import { WinsAnalysis } from './analyzers/WinsAnalysis'

const csvFileReader = new CsvFileReader('./football.csv')
csvFileReader.read()

const matchReader = new MatchReader(csvFileReader.data)
matchReader.parse()
console.log(matchReader.data)

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReports()
)
summary.buildAndPrintReport(matchReader.data)
// const reader = new MatchReader('./football.csv')
// reader.read()
