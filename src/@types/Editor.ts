import { AlgaNews } from "./AlgaNews";

export namespace Editor {
    export type Summary = AlgaNews.components['schemas']['EditorSummary']
    export type Detailed = AlgaNews.components['schemas']['EditorDetailed']

    export type MonthlyEarnings = AlgaNews.components['schemas']['EditorMonthlyEarnings']
    export type TagRatio = AlgaNews.components['schemas']['EditorTagRatio']
}
