export class Foro {
    constructor(
        public id:string,
        public titulo:string,
        public descripcion:string,
        public fecha:Date,
        public idGaleria:string,
        public idUsuario:string
    ) {}
}