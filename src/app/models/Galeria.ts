export class Galeria {
    constructor(
        public id:string,
        public files:Array<{
            contentType:string,
            url:string
        }>
    ) {
    }
}