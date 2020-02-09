export class ArticleRequest {
    constructor(
        public title: string = '',
        public projectId: number = null,
        public content: string = '',
        public image: File = null
    ) {

    }
}
