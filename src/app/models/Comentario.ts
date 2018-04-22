export class Comentario {
    constructor(
        public id:string,
       public idComentarioPadre:string,
       public fecha:Date,
       public idForo:string,
       public mensaje:string,
       public idUsuario:string
    ) { }
}