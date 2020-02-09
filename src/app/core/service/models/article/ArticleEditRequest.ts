export class ArticleEditRequest {
    constructor(
        public id: number = null,
        public title: string = '',
        public content: string = ''
    ) {

    }
}
