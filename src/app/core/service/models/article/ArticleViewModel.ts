import {ArticleAuthorViewModel} from "./ArticleAuthorViewModel";
import {ProjectViewModel} from "./ProjectViewModel";

export class ArticleViewModel {
    constructor(
        public author: ArticleAuthorViewModel = new ArticleAuthorViewModel(),
        public project: ProjectViewModel = new ProjectViewModel(),
        public title: string = '',
        public content: string = '',
        public imageUrl: string = '',
        public datePublished: Date = null
    ) {

    }
}
