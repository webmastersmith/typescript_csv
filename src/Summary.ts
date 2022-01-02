import { MatchData } from './MatchData'
import { WinsAnalysis } from './analyzers/WinsAnalysis'
import { HtmlReport } from './reportTargets/htmlReport'

export interface Analyzer {
  run(matches: MatchData[]): string
}

export interface OutputTarget {
  print(report: string): void
}

export class Summary {
  static winsAnalysisAndHtmlReport(team: string, matches: MatchData[]) {
    return new Summary(
      new WinsAnalysis(team),
      new HtmlReport()
    ).buildAndPrintReport(matches)
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches)
    this.outputTarget.print(output)
  }
}
