export class Comentario {
    constructor(
        public _id:string,
       public idComentarioPadre:string,
       public fecha:Date,
       public idForo:string,
       public mensaje:string,
       public idUsuario:string,
       public isHidden:boolean = true,
       public respuestas: Array<Comentario> = []
    ) { }
}