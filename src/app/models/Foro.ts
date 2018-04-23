export class Foro {
    constructor(
        public _id:string,
        public titulo:string,
        public descripcion:string,
        public fecha:Date,
        public idGaleria:string,
        public comentarios:number,
        public idUsuario:string
    ) {}
}