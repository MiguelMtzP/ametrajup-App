export class Galeria {
    constructor(
        public _id:string,
        public files:Array<{
            contentType:string,
            url:string
        }>
    ) {
    }
}