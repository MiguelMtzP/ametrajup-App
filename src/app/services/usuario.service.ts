import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService {
  public url:string
  constructor() {
    this.url = "http://localhost:3000/"
//    this.url = "http://167.99.235.43:3000/"
   }

}
