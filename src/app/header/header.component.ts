import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import { AuthServiceService } from "../services/auth-service.service";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[AuthServiceService]
})
export class HeaderComponent implements OnInit {

  public idioma :string

  constructor(
    public _authServise: AuthServiceService,
    private translate: TranslateService,
    private _router:Router
   ) { 
     this.idioma = "es"
    this.translate.setDefaultLang("es")
  }

  switchLanguage(language: string) {
    this.idioma= language
    this.translate.use(language);
    
  }

  ngOnInit() {
    
  }
  logout(){
    localStorage.clear()
    this._router.navigate(["/"])
  }

}
