import { MatchReader } from './MatchReader'
import { Summary } from './Summary'

const matchReader = MatchReader.fromCsv('./football.csv')
matchReader.parse()
console.log(matchReader.matches)

// both below do same thing
// const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport())
// summary.buildAndPrintReport(matchReader.matches)

// same as above
const summary = Summary.winsAnalysisAndHtmlReport(
  'Man United',
  matchReader.matches
)
