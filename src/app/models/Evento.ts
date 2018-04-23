export class Evento {
    constructor(
        public _id:string,
        public titulo:string,
        public descripcion:string,
        public fecha:Date,
        public idGaleria:string,
    ) {}
}