export class Usuario {
    constructor(
        public id:string,
        public nombre:string,
        public apellidoPaterno:string,
        public apellidoMaterno:string,
        public correo:string,
        public genero:string,
        public ocupacion:string,
        public telefono:string,
        public contrasenia:string,
        public empresa:string,
        public sector:string,
        public isAdmin:Boolean,
        public fotoPerfil:string
    ) {
        
    }
}