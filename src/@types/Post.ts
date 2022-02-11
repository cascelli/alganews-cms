import { AlgaNews } from "./AlgaNews";

export namespace Post {
    export type Summary = AlgaNews.components['schemas']['PostSummary']
    export type Detailed = AlgaNews.components['schemas']['PostDetailed']
    export type WithEarnings = AlgaNews.components['schemas']['PostWithEarnings']
    export type Input = AlgaNews.components['schemas']['PostInput']

    export type Paginated = AlgaNews.components['schemas']['PostsPaginated']

    export type Earnings = AlgaNews.components['schemas']['PostEarnings']

}